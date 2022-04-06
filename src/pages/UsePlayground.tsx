import * as React from 'react';
import { usePlayground } from '../components/playground';
import { Button } from '../components/Button';

const UsePlaygroundPage: React.FC = () => {
        <h1>Use Playground</h1>
        const params = usePlayground({
            componentName: "Button",
            props: {
                size: {
                    label: 'Size',
                    defaultValue: undefined,
                    options: [undefined, 'xs', 'sm', 'lg'],
                },
                skin: {
                    label: 'Skin',
                    defaultValue: 'brand',
                    options: ['brand', 'danger'],
                },
                'skin.name.test': {
                    label: 'Loading',
                    defaultValue: false,
                },
                children: {
                    label: 'Children',
                    defaultValue: 'Button',
                },
            },
            scope: Button
        });

        console.log(params);
        return (
            <h1>Use Playground</h1>
        );
};

export default UsePlaygroundPage;
