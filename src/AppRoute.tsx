import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import HomePage from './pages/Home';
import NoMatch from './pages/NoMatch';

const AppRoute = (): React.ReactElement => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomePage />,
        },
        { path: '*', element: <NoMatch /> },
    ]);

    return <div>{ routes }</div>;
};

export default AppRoute;
