export const css = (...cssModules: string[]) => {
    return cssModules.reduce((acc, cssModule) => {
        return `${acc} ${cssModule}`;
    }, "");
}