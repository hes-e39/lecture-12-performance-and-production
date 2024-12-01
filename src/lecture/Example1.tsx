import { useCallback, useState } from 'react';

const Example1 = () => {
    const [count, setCount] = useState(0);

    const handleClickNotOptimal = () => {
        setCount(count + 1);
    };

    const handleClickOptimal = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    // // vs.
    // const handleClickOptimal = useCallback(() => {
    //     setCount(count + 1);
    // }, [count]);

    return (
        <div className="flex flex-col gap-4">
            <div className="font-semibold text-lg">Counter: {count}</div>
            <Button onClick={handleClickNotOptimal}>Increment</Button>
            <Button onClick={handleClickOptimal}>Increment (useCallback)</Button>
        </div>
    );
};

const Button = ({ onClick, children }: { onClick: (e: React.MouseEvent) => void; children: React.ReactNode }) => {
    console.log(children, 'Button is re-rendering');

    return <button onClick={onClick}>{children}</button>;
};

export default Example1;
