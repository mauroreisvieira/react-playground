import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppRoute from './AppRoute';

const App: React.FC = () => (
    <BrowserRouter>
        <AppRoute />
    </BrowserRouter>
);

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement as HTMLElement);

root.render(<App />);
