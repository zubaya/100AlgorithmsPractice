export function adjacentElementsProduct(inputArray: number[]): number {
    let  highestProduct = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length -1; i ++) {
      highestProduct = (inputArray[i] * inputArray[i + 1]) > highestProduct ? (inputArray[i] * inputArray[i + 1]) : highestProduct;
    }
    return highestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));