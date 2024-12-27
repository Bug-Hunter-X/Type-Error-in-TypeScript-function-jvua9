function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Correct
let result2 = subtract(10, 5); // Correct

//Type Error
let result3 = add(5, "3");
let result4 = subtract(10, "5");