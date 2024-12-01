import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import './index.css';
import { StrictMode, Suspense, lazy } from 'react';
import App from './App';

const Example1 = lazy(() => import('./lecture/Example1'));
const Example2 = lazy(() => import('./lecture/Example2'));
const Example3 = lazy(() => import('./lecture/Example3'));
const Example4 = lazy(() => import('./lecture/Example4'));
const Example5 = lazy(() => import('./lecture/Example5'));
const Example6 = lazy(() => import('./lecture/Example6'));

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/example1',
                element: <Example1 />,
            },
            {
                path: '/example2',
                element: <Example2 />,
            },
            {
                path: '/example3',
                element: <Example3 />,
            },
            {
                path: '/example4',
                element: <Example4 />,
            },
            {
                path: '/example5',
                element: <Example5 />,
            },
            {
                path: '/example6',
                element: <Example6 />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </StrictMode>,
);
