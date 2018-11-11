import getStringTable from 'vamtiger-get-string-table/build';

export default ({ args, short, description }: IParams) => {
    const header = [
        Header.argument,
        Header.short,
        Header.description
    ] as string[];
    const body = [] as string[][];
    const keys = Object
        .keys(args)
        .sort();

    let arg;
    let shortArg;
    let argDescription;
    let row;
    let help;

    keys.forEach(key => {
        arg = args[key];
        shortArg = short[key] || '';
        argDescription = description[key] || '';
        row = [
            arg,
            shortArg,
            argDescription
        ];

        body.push(row);
    })

    help = getStringTable({
        header,
        body
    });

    return help;
}

export enum Header {
    argument = 'Argument',
    short = 'Short',
    description = 'Description'
}

export interface IParams {
    args: IArgs;
    short: IArgs;
    description: IArgs;
}

export interface IArgs {
    [key: string]: string;
}