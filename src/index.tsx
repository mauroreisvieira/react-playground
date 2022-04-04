import * as React from 'react';
import View from './components/View';

type ButtonProps = React.HTMLButtonAttributes<HTMLButtonElement> & {
    skin?: 'brand' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ skin, children, ...otherProps }) => {
    const classNames = skin ? `button--${skin}` : undefined;
    return (
        <button className={classNames} {...otherProps}>{ children }</button>
    )
};

const Playground = () => {
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
            children: ['brand', 'gray', 'danger', 'ghost', 'muted'],
        },
        {
            label: 'Skin Modifier',
            name: 'skinModifier',
            defaultValue: undefined,
            children: [undefined, 'inverted', 'ghost', 'muted'],
        },
        { label: 'Loading', name: 'isLoading', defaultValue: false },
        { label: 'Disabled', name: 'isDisabled', defaultValue: false },
        { label: 'Squared', name: 'squared', defaultValue: false },
        { label: 'Full Width', name: 'isFullWidth', defaultValue: false },
        { label: 'Children', name: 'children', defaultValue: 'Button' },
    ];

    return (
        <View
            componentName="Button"
            options={BUTTON_OPTIONS}>
            <Button />
        </View>
    );
};

export default Playground;
