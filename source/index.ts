import getStringTable from 'vamtiger-get-string-table';
import { startCase } from 'lodash';

export default (params: IParams, opts?: IOptions) => {
    const header = Object.keys(params);
    const rowKeys = Object.keys(params[header[0]]).sort();
    const body:string[][] = [];

    let row: string[];
    let rowColumn: string;
    let help: string;

    for (let rowKey of rowKeys) {
        row = [];

        for (let headerKey of header) {
            rowColumn = params[headerKey][rowKey];

            if (opts && opts.options && opts.options.includes(headerKey)) {
                rowColumn = `${StringConstant.doubleDash}${rowColumn}`;
            }

            row.push(rowColumn);
        }

        body.push(row);
    }

    help = getStringTable({
        header: header.map(startCase),
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

export interface IOptions {
    options: string[]
}

export interface IArgs {
    [key: string]: string;
}

export enum StringConstant {
    doubleDash = '--'
}