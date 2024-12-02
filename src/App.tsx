import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="p-10 h-full">
            <nav className="pb-4">
                <ul className="flex justify-between text-lg font-bold *:p-2 *:bg-gray-100 *:rounded-lg">
                    <li className="hover:underline">
                        <Link to="/example1">
                            Example 1 (<code>useMemo</code>)
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example2">
                            Example 2 (<code>memo</code>)
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example3">
                            Example 3 (<code>useCallback</code>)
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example4">
                            Example 4 (<code>useCallback</code>)
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example5">
                            Example 5 (<code>useCallback</code>)
                        </Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example6">
                            Example 6 (<code>ErrorBoundary</code>)
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
