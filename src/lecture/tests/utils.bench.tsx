import { bench, describe } from 'vitest';
import { fibonacci, memoisedFibonacci } from '../utils';

describe('Fibinacci sequence', () => {
    bench(
        'slow',
        () => {
            fibonacci(12);
        },
        { time: 100 },
    );

    bench(
        'fast',
        () => {
            memoisedFibonacci(12);
        },
        { time: 100 },
    );
});
