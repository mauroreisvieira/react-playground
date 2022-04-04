import * as React from 'react';

import reactElementToJSXString from 'react-element-to-jsx-string';

import Editor from './Editor';
import Knobs from './Knobs';

import { stringToObject } from '../utils';
import { ViewProps, Options, Form } from '../types';

import { useForm } from '../hooks/useForm';

const View: React.FC<ViewProps> = ({
    componentName,
    options,
    inverted,
    children,
}) => {
    const [settings, setSettings] = React.useState<Options[]>(options);

    const initialValues = React.useMemo(() => (
        options.reduce((acc, curr) => {
            const { name, defaultValue } = curr;
            return {
                ...acc,
                [name]: defaultValue,
            };
        }, {})
    ), []);

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
            .reduce((_, curr) => stringToObject<Options['defaultValue']>(curr, computedProps[curr]), {});

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
            <div className="gb-row">
                <div className="gb-col-8 gb-d-flex gb-row--middle gb-row--center">
                    <div
                        style={{
                            width: '100%',
                            background: inverted && inverted(computedProps) ? '#000' : undefined,
                        }}
                        className="gb-text-center gb-px-2 gb-py-2">
                        { Component }
                    </div>
                </div>
                <div className="gb-col-4">
                    <Knobs
                        componentName={componentName}
                        options={settings}
                        computedProps={computedProps}
                        onChange={handleChange} />
                </div>
            </div>
            <div>
                <Editor code={CODE} />
            </div>
            <div className="gb-text-right">
                <button
                    className="gb-mr-2"
                    skin="gray"
                    skinModifier="ghost"
                    size="sm"
                    squared
                    onClick={() => navigator.clipboard.writeText(CODE)}>
                    Copy Code
                </button>
                <button
                    skin="gray"
                    skinModifier="ghost"
                    size="sm"
                    squared
                    onClick={() => reset()}>
                    Reset
                </button>
            </div>
        </>
    );
};

export default View;
