# Type Error in TypeScript Function

This example demonstrates a common type error in TypeScript that occurs when passing incorrect argument types to a function.

## Bug
The `add` and `subtract` functions are defined to accept two numbers as arguments and return a number.  However, the code attempts to call `add` and `subtract` with string arguments, which causes a type error.

## Solution
The solution involves type checking the input values and handling the potential error in the function, or changing the functions to accept strings and make the necessary type conversions.