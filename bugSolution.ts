function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // or throw an error
  }
  return numA + numB;
}

function subtractSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 0; //or throw an error
  }
  return numA - numB;
}

let result1 = add(5, 3); // Correct
let result2 = subtract(10, 5); // Correct
let result3 = addSafe(5, "3"); // Safe handling
let result4 = subtractSafe(10, "5"); // Safe handling
console.log(result3,result4); //Output: 8 5 