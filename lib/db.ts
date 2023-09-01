import { Redis } from '@upstash/redis';

// See documentation at
// https://docs.upstash.com/redis/sdks/javascriptsdk/getstarted#basic-usage
const redis = new Redis({
  url: process.env.NEXT_PUBLIC_REDIS_URL,
  token: process.env.NEXT_PUBLIC_REDIS_TOKEN,
});

// NOTE: use your full_name as a key prefix when writing to Redis, to avoid collisions.

export default redis;
