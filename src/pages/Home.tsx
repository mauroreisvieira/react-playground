import * as React from 'react';
import View from '../components/View';
import { classNames } from '../utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    skin?: 'brand' | 'danger';
};

const Button: React.FC<ButtonProps> = ({
    skin = 'brand',
    size = 'md',
    children,
    ...otherProps
}) => {
    const computedClasses = classNames(`button--${skin}`, size && `button--${size}`);
    return (
        <button className={computedClasses} {...otherProps}>
            {children}
        </button>
    );
};

const HomePage: React.FC = () => {
    const BUTTON_OPTIONS = [
        {
            label: 'Size',
            name: 'size',
            defaultValue: undefined,
            children: [undefined, 'xs', 'sm', 'lg'],
        },
        {
            label: 'Skin',
            name: 'skin',
            defaultValue: 'brand',
            children: ['brand', 'danger'],
        },
        {
            label: 'Children',
            name: 'children',
            defaultValue: 'Button',
        },
    ];

    return (
        <>
            <h1>Playground</h1>
            <View componentName="Button" options={BUTTON_OPTIONS}>
                <Button />
            </View>
        </>
    );
};

export default HomePage;
