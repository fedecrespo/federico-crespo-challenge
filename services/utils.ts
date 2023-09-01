import redis from '../lib/db';
import { DataType } from '../types/dataType';

export const storeData = async (key: string, body: any) => {
  try {
    const response = await redis.set(key, body);
    return response;
  } catch (e) {
    throw new Error('Error storing data in Redis');
  }
};

export const getData = async (key: string): Promise<DataType> => {
  try {
    const response: DataType = await redis.get(key);
    return response;
  } catch (e) {
    throw new Error('Error getting data from Redis');
  }
};
