import * as React from 'react';

export type FormChangeEvent = React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement>;

export type Props = {
    label: string;
    defaultValue: string | boolean | number | undefined;
    value: string | boolean | number | undefined;
    error?: boolean;
    description?: string;
    options?: (string | undefined)[];
    scope?: React.ReactNode;
    validator?: <T>(props: T) => boolean;
};

export type Form = {
    [key: string]: Props['value'];
};

export type UsePlaygroundProps = {
    componentName: string;
    props: {
        [key: string]: Props
    };
    onInvertedChange?: <T>(props: T) => boolean;
}

export type UsePlayground = {
    computedProps: Props;
    element: React.ReactNode;
    jsxString: string;
    inverted: boolean;
}

// UI
export type ViewProps = Omit<UsePlaygroundProps, 'props'> & {
    props: {
        [key: string]: Omit<Props, 'value' | 'error' | 'scope'>;
    };
}

export type KnobsProps = {
    props: {
        [key: string]: Props
    };
    computedProps: Form;
    onChange: (event: FormChangeEvent) => void;
}

