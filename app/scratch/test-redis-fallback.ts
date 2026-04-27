import { cacheUserTier, getCachedUserTier } from "./src/lib/redis";

async function test() {
  console.log("Testing Optional Redis...");
  
  // These should not crash or log connection errors
  await cacheUserTier("test-user", 5);
  const tier = await getCachedUserTier("test-user");
  
  console.log("Result:", tier);
  console.log("Test finished without crash.");
}

test();
