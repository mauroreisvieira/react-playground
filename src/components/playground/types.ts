import * as React from 'react';

export type FormChangeEvent = React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>;

export type Props = {
    label: string;
    name: string;
    defaultValue: string | boolean | number | undefined;
    value?: string | boolean | number;
    error?: boolean;
    description?: string;
    options?: (string | undefined)[];
    validator?: <T>(props: T) => boolean;
};

export interface ViewProps {
    componentName: string;
    props: Omit<Props, 'value' | 'error'>[];
    onInvertedChange?: <T>(props: T) => boolean;
}

export type Form = {
    [key: string]: Props['value'];
};

export interface KnobsProps {
    props: Props[];
    computedProps: Form;
    onChange: (event: FormChangeEvent) => void;
}
