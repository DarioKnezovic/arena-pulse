export const generate = () => {
  const timeStamp = new Date().getTime();
  const randomPart = Math.random().toString(36).substring(2, 15);
  return `userToken_${timeStamp}_${randomPart}`;
};
