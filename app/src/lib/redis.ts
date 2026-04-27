import Redis from 'ioredis';

const isProduction = process.env.NODE_ENV === 'production';
const redisUrl = process.env.REDIS_URL;

// Determine if we should attempt a real connection
const shouldConnect = !!redisUrl;

if (!shouldConnect) {
  if (isProduction) {
    console.warn("⚠️ WARNING: REDIS_URL is not defined. Redis caching is DISABLED in production.");
  } else {
    // Silent in development to keep terminal clean
  }
}

// Prevent multiple connections in development due to hot reloading
const globalForRedis = globalThis as unknown as {
  redis: Redis | undefined;
};

// Initialize the real client OR a silent mock proxy
export const redis = shouldConnect
  ? (globalForRedis.redis ?? new Redis(redisUrl, {
      maxRetriesPerRequest: 1,
      connectTimeout: 5000,
      lazyConnect: true,
    }))
  : new Proxy({} as any, {
      get: (target, prop) => {
        if (prop === 'on') return () => {};
        // Return a function that does nothing for any Redis method call
        return async () => null;
      }
    });

// Suppress unhandled error events for real client
if (shouldConnect && 'on' in redis) {
  redis.on('error', (err: any) => {
    if (err.message.includes('ECONNREFUSED')) return;
    console.error("Redis Client Error:", err.message);
  });
}

if (!isProduction && shouldConnect) {
  globalForRedis.redis = redis;
}

export async function cacheUserTier(userId: string, tier: number) {
  try {
    // Cache for 1 hour
    await redis.set(`user:tier:${userId}`, tier, 'EX', 3600);
  } catch (error) {
    console.error("Failed to cache user tier:", error);
  }
}

export async function getCachedUserTier(userId: string): Promise<number | null> {
  try {
    const tier = await redis.get(`user:tier:${userId}`);
    return tier ? parseInt(tier, 10) : null;
  } catch (error) {
    console.error("Failed to get cached user tier:", error);
    return null;
  }
}

export async function invalidateUserTier(userId: string) {
  try {
    await redis.del(`user:tier:${userId}`);
  } catch (error) {
    console.error("Failed to invalidate user tier cache:", error);
  }
}
