export function allLongestStrings(inputArray: string[]): string[] {
  let longest = inputArray.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });

  let numbers = [1, 2, 3];

  let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

  return inputArray;
}

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
