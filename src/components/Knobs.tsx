import * as React from 'react';

import { KnobsProps } from './types';

const { useId } = React;

const Knobs = ({
    options,
    computedProps,
    onChange,
}: KnobsProps) => (
    <>
        { options.map(({
            name, label, description, value, children, validator, error,
        }) => (validator === undefined || (validator && validator(computedProps))) && (
            <div className="gb-mb-2" key={name}>
                <label htmlFor={useId()} className="gb-form-label">{ label }</label>
                { children ? (
                    <select
                        style={{ width: '100%' }}
                        id={useId()}
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
                                id={useId()}
                                name={name}
                                onChange={onChange}
                                isChecked={value} />
                        ) }
                        { (typeof value === 'string') && (
                            <input
                                id={useId()}
                                name={name}
                                onChange={onChange}
                                skin={error ? 'error' : undefined}
                                defaultValue={value} />
                        ) }
                    </>
                ) }
                { description && (
                    <span className="gb-form-description">{ description }</span>
                ) }
            </div>
        )) }
    </>
);

export default Knobs;
