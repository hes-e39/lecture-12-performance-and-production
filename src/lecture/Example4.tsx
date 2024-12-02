import { memo, useCallback, useState } from 'react';

// useCallback with a custom hook example
const useCounter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(c => c - 1);
    }, []);

    return { count, increment, decrement };
};

const Example4 = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div className="p-4 flex flex-col gap-2">
            <div>Count: {count}</div>
            <SlowComponent onIncrement={increment} onDecrement={decrement} />
        </div>
    );
};

const SlowComponent = memo(({ onIncrement, onDecrement }: { onIncrement: () => void; onDecrement: () => void }) => {
    console.log('[ARTIFICIALLY SLOW] Rendering <SlowComponent />');
    const startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    return (
        <div>
            <div className="flex gap-2">
                <button
                    className="rounded-md p-1 bg-slate-300"
                    onClick={() => {
                        onDecrement();
                    }}
                >
                    -
                </button>
                <button
                    className="rounded-md p-1 bg-slate-300"
                    onClick={() => {
                        onIncrement();
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
});

export default Example4;
