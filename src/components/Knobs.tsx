import * as React from 'react';

import { KnobsProps } from '../types';

const Knobs = ({
    options,
    computedProps,
    onChange,
}: KnobsProps) => {
    const idx = React.useId();
    return (
        <>
            { options.map(({
                name, label, description, value, children, validator, error,
            }) => (validator === undefined || (validator && validator(computedProps))) && (
                <div key={name}>
                    <label htmlFor={idx}>{ label }</label>
                    { children ? (
                        <select
                            style={{ width: '100%' }}
                            id={idx}
                            name={name}
                            value={value as string}
                            onChange={onChange}>
                            <option disabled>Select an option</option>
                            { children.map((child) => (
                                <option key={`${String(child)}-native-option`} value={child || 'undefined'}>{ child || 'default' }</option>
                            )) }
                        </select>
                    ) : (
                        <>
                            { (typeof value === 'boolean') && (
                                <input
                                    type="checkbox"
                                    id={idx}
                                    name={name}
                                    onChange={onChange}
                                    isChecked={value} />
                            ) }
                            { (typeof value === 'string') && (
                                <input
                                    id={idx}
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
            )) }
        </>
    );
}

export default Knobs;
