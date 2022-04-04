import * as React from 'react';

export type Form = {
    [key: string]: Options['value'];
};

export type Options = {
    label: string;
    name: string;
    defaultValue: string | boolean | number | undefined;
    value?: string | boolean | number;
    error?: boolean;
    description?: string;
    children?: (string | undefined)[];
    validator?: <T>(props: T) => boolean;
};

export interface ViewProps {
    componentName: string;
    options: Omit<Options, 'value' | 'error'>[];
    inverted?: <T>(props: T) => boolean;
}

export interface KnobsProps {
    options: Options[];
    computedProps: Form;
    onChange: (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>) => void;
}
