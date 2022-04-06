import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import HomePage from './pages/Home';
import ViewPage from './pages/View';
import UsePlaygroundPage from './pages/UsePlayground';
import NoMatch from './pages/NoMatch';

const AppRoute = (): React.ReactElement => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/view',
            element: <ViewPage />,
        },
        {
            path: '/use-playground',
            element: <UsePlaygroundPage />,
        },
        { path: '*', element: <NoMatch /> },
    ]);

    return <div>{ routes }</div>;
};

export default AppRoute;
