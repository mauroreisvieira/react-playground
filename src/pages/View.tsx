import * as React from 'react';
import { View } from '../components/playground';
import { Button, ButtonProps } from '../components/Button';

const ViewPage: React.FC = () => (
    <>
        <h1>Playground</h1>
        <View
            componentName="Button"
            props={{
                size: {
                    label: 'Size',
                    defaultValue: undefined,
                    options: [undefined, 'xs', 'sm', 'lg'],
                },
                isLoading: {
                    label: 'Loading',
                    defaultValue: false,
                },
                skin: {
                    label: 'Skin',
                    defaultValue: 'brand',
                    options: ['brand', 'danger'],
                },
                children: {
                    label: 'Children',
                    defaultValue: 'Button',
                },
            }}>
            <Button />
        </View>
    </>
);

export default ViewPage;
