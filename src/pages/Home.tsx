import * as React from 'react';
import { View } from '../components/playground';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
    <>
        <h1>Home</h1>
        <ul>
            <li>
                <Link to="view">View</Link>
            </li>
            <li>
                <Link to="use-playground">usePlayground</Link>
            </li>
        </ul>
    </>
);

export default HomePage;
