import * as React from 'react';
import { View } from '../components/playground';
import { Button } from '../components/Button';

const UsePlaygroundPage: React.FC = () => (
    <>
        <h1>Use Playground</h1>
        <View
            componentName="Button"
            props={[
                {
                    label: 'Size',
                    name: 'size',
                    defaultValue: undefined,
                    options: [undefined, 'xs', 'sm', 'lg'],
                },
                {
                    label: 'Skin',
                    name: 'skin',
                    defaultValue: 'brand',
                    options: ['brand', 'danger'],
                },
                {
                    label: 'Loading',
                    name: 'isLoading',
                    defaultValue: false,
                },
                {
                    label: 'Children',
                    name: 'children',
                    defaultValue: 'Button',
                },
            ]}>
            <Button />
        </View>
    </>
);

export default UsePlaygroundPage;
