import * as React from 'react';

import { KnobsProps } from '../types';

// const objectKeys: <Obj>(o: Obj) => (keyof Obj)[] = Object.keys;

export const Knobs = ({ props, computedProps, onChange }: KnobsProps) => {
    console.log('Render Knbos');
    return (
        <>
            {Object.keys(props).map((propName) => {
                const {
                    label,
                    description,
                    value,
                    options,
                    validator,
                    error,
                } = props[propName];
                    if (
                        validator === undefined ||
                        (validator && validator(computedProps))
                    ) {
                        return (
                            <div key={propName}>
                                <label htmlFor={propName}>{label}</label>
                                {options ? (
                                    <select
                                        style={{ width: '100%' }}
                                        id={propName}
                                        name={propName}
                                        value={value as string}
                                        onChange={onChange}
                                    >
                                        <option disabled>
                                            Select an option
                                        </option>
                                        {options.map((child) => (
                                            <option
                                                key={`${String(
                                                    child
                                                )}-option`}
                                                value={child || 'undefined'}
                                            >
                                                {child || 'default'}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <>
                                        {typeof value === 'boolean' && (
                                            <input
                                                type="checkbox"
                                                id={propName}
                                                name={propName}
                                                onChange={onChange}
                                                checked={value}
                                            />
                                        )}
                                        {typeof value === 'string' && (
                                            <input
                                                id={propName}
                                                style={{
                                                    borderColor: error ? '#f00' : undefined
                                                }}
                                                name={propName}
                                                onChange={onChange}
                                                defaultValue={value}
                                            />
                                        )}
                                    </>
                                )}
                                {description && <span>{description}</span>}
                            </div>
                        );
                    }
                }
            )}
        </>
    );
};
