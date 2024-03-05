import { generate } from '../utils/token';
import { delay } from '../utils/delay';

export const loginUser = async () => {
  await delay(3000);
  return generate();
};
