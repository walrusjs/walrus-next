export interface ColorFormatter {
    (message: string | {
        toString: () => string;
    }): string;
}
declare const _default: {
    fail: ColorFormatter;
    mute: ColorFormatter;
    pass: ColorFormatter;
    filePath: ColorFormatter;
    moduleName: ColorFormatter;
    projectName: ColorFormatter;
    symbol: ColorFormatter;
};
export default _default;
