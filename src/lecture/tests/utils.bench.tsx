import { bench, describe } from 'vitest';
import { fibonacci, memoisedFibonacci } from '../utils';

describe('Fibinacci sequence', () => {
    bench(
        'slow',
        () => {
            fibonacci(6);
        },
        { time: 100 },
    );

    bench(
        'fast',
        () => {
            memoisedFibonacci(6);
        },
        { time: 100 },
    );
});
