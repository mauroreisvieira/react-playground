import * as React from "react";
import { UsePlayground, ViewProps } from "./types";

export function usePlayground({ componentName, props, scope, onInvertedChange }: ViewProps): UsePlayground {
    console.log('componentName', componentName);
    console.log('props', props);
    console.log('onInvertedChange', onInvertedChange);
    return {
        computedProps: [],
        element: undefined,
        jsxString: '', //
        inverted: onInvertedChange,
    }
};
