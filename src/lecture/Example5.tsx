import { memo, useCallback, useState } from 'react';

const Example1 = () => {
    const [count, setCount] = useState(0);

    const handleClickNotOptimal = () => {
        setCount(count + 1);
    };

    const handleClickOptimal = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div className="font-semibold text-lg">Counter: {count}</div>
            <Button onClick={handleClickNotOptimal}>Increment</Button>
            <Button onClick={handleClickOptimal}>Increment (useCallback)</Button>
        </div>
    );
};

const Button = memo(({ onClick, children }: { onClick: (e: React.MouseEvent) => void; children: React.ReactNode }) => {
    console.log(children, 'Button is re-rendering');

    return (
        <button className="rounded-md p-2 bg-slate-400 hover:bg-slate-500 text-white w-fit" onClick={onClick}>
            {children}
        </button>
    );
});

export default Example1;
