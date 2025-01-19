function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return b; // Handle negative inputs
  } else if (a > 1000) { // Add a limit to prevent stack overflow for very large inputs
    return -1; // Or throw an error: throw new Error("Input too large");
  }
  return foo(a - 1, a + b);
}