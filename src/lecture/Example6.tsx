import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const BlowUp = ({ name }: { name?: any }) => {
    return <div>The length of name is {name.length}</div>;
};

const Example6 = () => {
    const [explode, setExplode] = useState(false);

    return (
        <ErrorBoundary fallback={<div className="w-full h-full flex items-center justify-center text-xl font-bold text-red-500">Something Failed</div>}>
            <div>
                <button className="rounded-md p-2 bg-slate-400 hover:bg-slate-500 text-white" onClick={() => setExplode(true)}>
                    Explode
                </button>
                {explode && <BlowUp />}
            </div>
        </ErrorBoundary>
    );
};

export default Example6;
