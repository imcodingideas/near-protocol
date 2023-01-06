export const css = (...classNames: (string | null | undefined | boolean)[]) => {
    return classNames.filter((className): className is string => typeof className === 'string' && !!className).reduce((acc, className) => {
        return `${acc} ${className}`;
    }, "");
}