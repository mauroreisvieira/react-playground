import * as React from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import * as themes from 'prism-react-renderer/themes/vsLight';

export interface EditorProps {
    code: string;
}

export const Editor = ({ code }: EditorProps) => (
    <Highlight
        {...defaultProps}
        theme={themes.default}
        code={code}
        language="jsx"
    >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
);
