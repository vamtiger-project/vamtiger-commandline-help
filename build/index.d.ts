declare const _default: (params: IParams) => string;
export default _default;
export declare enum Header {
    argument = "Argument",
    short = "Short",
    description = "Description"
}
export interface IParams {
    [key: string]: IArgs;
}
export interface IArgs {
    [key: string]: string;
}
