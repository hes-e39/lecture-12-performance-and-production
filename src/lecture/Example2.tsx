import { useMemo, useState } from 'react';

const reallyExpensiveFunction = (text: string) => {
    console.log('reallyExpensiveFunction started');

    const output: string[] = [];

    for (let i = 0; i < 10000000; i++) {
        output.push(`${text} ${i}`);
    }

    return output;
};

const Example2 = () => {
    const [value, setValue] = useState('');

    const [checked, setChecked] = useState(false);

    return (
        <div className="p-4 flex flex-col gap-2">
            <div className="flex gap-2">
                <div>Dark theme</div>
                <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
            </div>
            <input className="w-fit" placeholder="Type here ..." value={value} onChange={e => setValue(e.target.value)} />
            <ListItems value={value} isDark={checked} />
        </div>
    );
};

const ListItems = ({ value, isDark }: { value: string; isDark: boolean }) => {
    const items = useMemo(() => {
        return reallyExpensiveFunction(value);
    }, [value]);

    return (
        <div className={`flex flex-col gap-2 p-8 ${isDark ? 'bg-slate-500 text-white' : ''}`}>
            {items.slice(0, 10).map(i => (
                <div key={i} className="p-2 bg-gray-300">
                    {i}
                </div>
            ))}
        </div>
    );
};

export default Example2;
