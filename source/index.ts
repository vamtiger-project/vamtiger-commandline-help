import getStringTable from 'vamtiger-get-string-table';

export default (params: IParams) => {
    const header = Object.keys(params);
    const rowKeys = Object.keys(params[header[0]]);
    const body:string[][] = [];

    let row: string[];
    let rowColumn: string;
    let help: string;

    for (let rowKey of rowKeys) {
        row = [];

        for (let headerKey of header) {
            rowColumn = params[headerKey][rowKey];

            row.push(rowColumn);
        }

        body.push(row);
    }

    // const keys = Object
    //     .keys(args)
    //     .sort();

    // let arg;
    // let shortArg;
    // let argDescription;
    // let row;
    // let help;

    // keys.forEach(key => {
    //     arg = args[key];
    //     shortArg = short[key] || '';
    //     argDescription = description[key] || '';
    //     row = [
    //         arg,
    //         shortArg,
    //         argDescription
    //     ];

    //     body.push(row);
    // })

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
    [key: string]: IArgs;
}

export interface IArgs {
    [key: string]: string;
}