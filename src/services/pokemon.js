export const getRandomList = (number, max) => {
  let a = [];
  for (let i = 0; i < number; ++i) {
    a[i] = Math.floor(Math.random() * max) + 1;
  }

  return a;
};
