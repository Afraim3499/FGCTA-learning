import Redis from "ioredis";

const globalForRedis = globalThis as unknown as {
  redis: Redis | undefined;
};

function getRedis(): Redis | null {
  const redisUrl = process.env.REDIS_URL;

  if (!redisUrl) return null;

  if (!globalForRedis.redis) {
    globalForRedis.redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 1,
      connectTimeout: 5000,
      lazyConnect: true,
    });

    globalForRedis.redis.on("error", (error: Error) => {
      if (error.message.includes("ECONNREFUSED")) return;
      console.error("Redis Client Error:", error.message);
    });
  }

  return globalForRedis.redis;
}

export async function cacheUserTier(userId: string, tier: number) {
  const redis = getRedis();
  if (!redis) return;

  try {
    await redis.set(`user:tier:${userId}`, tier, "EX", 3600);
  } catch (error) {
    console.error("Failed to cache user tier:", error);
  }
}

export async function getCachedUserTier(userId: string): Promise<number | null> {
  const redis = getRedis();
  if (!redis) return null;

  try {
    const tier = await redis.get(`user:tier:${userId}`);
    return tier ? Number.parseInt(tier, 10) : null;
  } catch (error) {
    console.error("Failed to get cached user tier:", error);
    return null;
  }
}

export async function invalidateUserTier(userId: string) {
  const redis = getRedis();
  if (!redis) return;

  try {
    await redis.del(`user:tier:${userId}`);
  } catch (error) {
    console.error("Failed to invalidate user tier cache:", error);
  }
}
