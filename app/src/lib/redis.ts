import Redis from 'ioredis';

const getRedisUrl = () => {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }
  
  if (process.env.NODE_ENV !== 'production') {
    return 'redis://localhost:6379';
  }
  
  console.warn("WARNING: REDIS_URL is not defined in production. Falling back to localhost.");
  return 'redis://localhost:6379';
};

// Prevent multiple connections in development due to hot reloading
const globalForRedis = globalThis as unknown as {
  redis: Redis | undefined;
};

export const redis = globalForRedis.redis ?? new Redis(getRedisUrl(), {
  maxRetriesPerRequest: 1,
  connectTimeout: 5000,
  lazyConnect: true, // Don't connect until used
});

// Suppress unhandled error events
redis.on('error', (err) => {
  if (err.message.includes('ECONNREFUSED')) {
    // Only log once to avoid noise
    return;
  }
  console.error("Redis Client Error:", err.message);
});

if (process.env.NODE_ENV !== 'production') {
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
