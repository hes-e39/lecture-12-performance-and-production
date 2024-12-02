import { memo, useCallback, useState } from 'react';

const Example3 = () => {
    const [isDark, setIsDark] = useState(false);
    const [_, setCount] = useState(0);

    const onChange = useCallback((count: number) => {
        setCount(count);
    }, []);

    return (
        <div className={`p-4 flex flex-col gap-2 ${isDark ? 'bg-slate-500 text-white' : ''}`}>
            <div>
                Toggle theme: <input type="checkbox" checked={isDark} onChange={e => setIsDark(e.target.checked)} />
            </div>
            <SlowComponent onChange={onChange} />
        </div>
    );
};

const SlowComponent = memo(({ onChange }: { onChange: (c: number) => void }) => {
    const [count, setCount] = useState(0);

    console.log('[ARTIFICIALLY SLOW] Rendering <SlowComponent />');
    const startTime = performance.now();
    while (performance.now() - startTime < 500) {
        // Do nothing for 500 ms to emulate extremely slow code
    }

    return (
        <div>
            <div>Counter: {count}</div>
            <div className="flex gap-2">
                <button
                    className="rounded-md p-1 bg-slate-300"
                    onClick={() => {
                        setCount(count - 1);
                        onChange(count - 1);
                    }}
                >
                    -
                </button>
                <button
                    className="rounded-md p-1 bg-slate-300"
                    onClick={() => {
                        setCount(count + 1);
                        onChange(count + 1);
                    }}
                >
                    +
                </button>
            </div>
            Last updated at {new Date().toLocaleTimeString()}
        </div>
    );
});

export default Example3;
