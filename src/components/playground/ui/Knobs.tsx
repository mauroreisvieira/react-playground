import * as React from 'react';

import { KnobsProps } from '../types';

export const Knobs = ({
    props,
    computedProps,
    onChange,
}: KnobsProps) => {
    return (
        <>
            { props.map(({
                name, label, description, value, options, validator, error,
            }) => {
                if (validator === undefined || (validator && validator(computedProps))) {
                    const id = `${label}-${React.useId()}`;
                    return (
                        <div key={name}>
                            <label htmlFor={id}>{ label }</label>
                            { options ? (
                                <select
                                    style={{ width: '100%' }}
                                    id={id}
                                    name={name}
                                    value={value as string}
                                    onChange={onChange}>
                                    <option disabled>Select an option</option>
                                    { options.map((child) => (
                                        <option key={`${String(child)}-native-option`} value={child || 'undefined'}>{ child || 'default' }</option>
                                    )) }
                                </select>
                            ) : (
                                <>
                                    { (typeof value === 'boolean') && (
                                        <input
                                            type="checkbox"
                                            id={id}
                                            name={name}
                                            onChange={onChange}
                                            checked={value} />
                                    ) }
                                    { (typeof value === 'string') && (
                                        <input
                                            id={id}
                                            name={name}
                                            onChange={onChange}
                                            defaultValue={value} />
                                    ) }
                                </>
                            ) }
                            { description && (
                                <span>{ description }</span>
                            ) }
                        </div>
                    )
                }
            }) }
        </>
    );
}
