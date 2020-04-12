declare const _default: (params: IParams, opts?: IOptions | undefined) => string;
export default _default;
export declare enum Header {
    argument = "Argument",
    short = "Short",
    description = "Description"
}
export interface IParams {
    [key: string]: IArgs;
}
export interface IOptions {
    options: string[];
}
export interface IArgs {
    [key: string]: string;
}
export declare enum StringConstant {
    doubleDash = "--"
}
