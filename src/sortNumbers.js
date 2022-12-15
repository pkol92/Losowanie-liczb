import { getRandomNumbers } from "./getRandomNumbers";
import { makeTable } from "./makeTable";

export const sortNumbers = () => {
  const numbers = getRandomNumbers(20, 100);
  const even = [];
  const odd = [];
  numbers.map((x) => {
    return x % 2 == 0 ? even.push(x) : odd.push(x);
  });
  makeTable(even, odd, ["Parzyste", "Nieparzyste"]);
};
