// Return the nth fibonacci number
export const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// eturn the nth fibonacci number (optimized)
export const memoisedFibonacci = (n: number, cache: { [key: number]: number } = {}) => {
    if (cache[n]) return cache[n];
    if (n <= 1) return n;
    cache[n] = memoisedFibonacci(n - 1, cache) + memoisedFibonacci(n - 2, cache);
    return cache[n];
};
