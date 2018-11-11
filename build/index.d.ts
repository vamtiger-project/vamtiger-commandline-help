declare const _default: ({ args, short, description }: IParams) => string;
export default _default;
export declare enum Header {
    argument = "Argument",
    short = "Short",
    description = "Description"
}
export interface IParams {
    args: IArgs;
    short: IArgs;
    description: IArgs;
}
export interface IArgs {
    [key: string]: string;
}
