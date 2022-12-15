export const getRandomNumbers = (k, n) => {
  const numbers = new Array(n);
  const pickedNumbers = [];

  for (let i = 0; i < n; i++) {
    numbers[i] = i + 1;
  }
  for (let i = 0; i < k; i++) {
    let r = Math.floor(Math.random() * n);

    pickedNumbers.push(numbers[r]);

    numbers[r] = numbers[n - 1];

    n--;
  }
  return pickedNumbers.sort((a, b) => a - b);
};
