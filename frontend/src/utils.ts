export const css = (...cssModules: string[]) => {
    return cssModules.filter(Boolean).reduce((acc, cssModule) => {
        return `${acc} ${cssModule}`;
    }, "");
}