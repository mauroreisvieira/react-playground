export const stringToObject = <T>(string: string, value: T, separator = '.') => {
    // Transforming string into array of props
    const props = string.split(separator);
    // Getting the last element of the array
    const last = props.pop();

    let ref: Record<string, {}> = {};
    const object: Record<string, {}> = ref;

    // Declare new object for every prop and get reference to that prop
    props.forEach((prop: string) => {
        ref[prop] = {};
        ref = ref[prop];
    });

    // Assign last value
    // eslint-disable-next-line no-return-assign
    if (last) ref[last] = value;

    return object;
};

export const uniqueId = (componentName: string, id: string) => (`${componentName}-${id}`).toLocaleLowerCase();
