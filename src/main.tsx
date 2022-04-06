import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppRoute from './AppRoute';

interface AppProps {
    callback: () => void;
}

const App = ({ callback }: AppProps) => (
    <React.StrictMode>
        <div ref={callback}>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </div>
    </React.StrictMode>
);

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement as HTMLElement);

root.render(<App callback={() => console.log('renderered')} />);
