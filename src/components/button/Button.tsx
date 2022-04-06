import * as React from 'react';
import { classNames } from '../../utils';

type ButtonNativeAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends ButtonNativeAttributes {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    skin?: 'brand' | 'danger';
    isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    skin = 'brand',
    size = 'md',
    isLoading,
    children,
    ...otherProps
}) => {
    const computedClasses = classNames(
        'button',
        `button--${skin}`,
        size && `button--${size}`,
        isLoading && 'button--loading'
    );
    return (
        <button className={computedClasses} {...otherProps}>
            {children}
        </button>
    );
};
