import * as React from 'react';

import reactElementToJSXString from 'react-element-to-jsx-string';

import { Editor } from './Editor';
import { Knobs } from './Knobs';

import { stringToObject } from '../../../utils';
import { ViewProps, Props, Form } from '../types';

import { useForm } from '../../../hooks/useForm';

export const View: React.FC<ViewProps> = ({
    componentName,
    props,
    onInvertedChange,
    children,
}) => {
    const [settings, setSettings] = React.useState<Props[]>(props);
    const initialValues = React.useMemo(() => (
        props.reduce((acc, curr) => {
            const { name, defaultValue } = curr;
            return {
                ...acc,
                [name]: defaultValue,
            };
        }, {})
    ), [props]);

    const [
        computedProps,
        handleChange,,
        reset,
    ] = useForm<Form>(initialValues);

    React.useEffect(() => {
        setSettings(
            settings.map((setting) => ({
                ...setting,
                value: computedProps[setting.name] || setting.defaultValue,
            })),
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [computedProps]);

    const setError = (key: string, error: boolean) => {
        setSettings(settings.map((setting) => {
            if (setting.name === key) {
                return {
                    ...setting,
                    error,
                };
            }
            return setting;
        }));
    };

    const Component = React.useMemo(() => {
        const nestedProps = Object.keys(computedProps)
            .filter((key) => key.includes('.') && (computedProps[key] && computedProps[key] !== 'undefined'))
            .reduce((_, curr) => stringToObject<Props['defaultValue']>(curr, computedProps[curr]), {});

        const props = Object.keys(computedProps)
            .reduce((acc: Record<string, unknown>, key) => {
                if (!key.includes('.')) {
                    acc[key] = computedProps[key];
                }

                if (key.startsWith('on')) {
                    try {
                        // eslint-disable-next-line no-eval
                        acc[key] = eval(String(computedProps[key]));
                        setError(key, false);
                    } catch (error) {
                        setError(key, true);
                    }
                }

                return acc;
            }, {});

        if (React.isValidElement(children)) {
            Object.assign(children.type, {
                displayName: componentName,
            });

            return React.cloneElement(children, {
                ...props,
                ...nestedProps,
            });
        }

        return null;
    }, [computedProps]);

    const CODE = reactElementToJSXString(Component, {
        tabStop: 2,
        showFunctions: true,
        filterProps: (val) => val !== undefined && val !== 'undefined' && val !== '',
    });

    return (
        <>
            <div>
                <div>
                    <div
                        style={{
                            width: '100%',
                            background: onInvertedChange && onInvertedChange(computedProps) ? '#000' : undefined,
                        }}>
                        { Component }
                    </div>
                </div>
                <div>
                    <Knobs
                        props={settings}
                        computedProps={computedProps}
                        onChange={handleChange} />
                </div>
            </div>
            <div>
                <Editor code={CODE} />
            </div>
            <div>
                <button
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={() => navigator.clipboard.writeText(CODE)}>
                    Copy Code
                </button>
                <button
                    onClick={reset}>
                    Reset
                </button>
            </div>
        </>
    );
};
