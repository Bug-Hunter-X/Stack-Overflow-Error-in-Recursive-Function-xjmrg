# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow due to uncontrolled recursion.  The `foo` function recursively calls itself, but the base case isn't sufficient to handle large inputs, leading to exceeding the call stack limit.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version with appropriate termination conditions.

## How to reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the `foo` function with a relatively large value for the first argument (e.g., `foo(1000, 1)`).
4. Observe the stack overflow error in your console.

## Solution

The solution involves adding proper checks to handle large inputs and prevents the infinite recursion.