export function addTwoDigits(n: any): number {
    let result = 0;
    let inputArray = n.toString().split('');
    inputArray.forEach(element => {
        console.log(element);
        result = parseInt(element) + result;

    });
    return result;
}

console.log(addTwoDigits(29));