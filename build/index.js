"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_get_string_table_1 = require("vamtiger-get-string-table");
exports.default = (params) => {
    const header = Object.keys(params);
    const rowKeys = Object.keys(params[header[0]]);
    const body = [];
    let row;
    let rowColumn;
    let help;
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
    help = vamtiger_get_string_table_1.default({
        header,
        body
    });
    return help;
};
var Header;
(function (Header) {
    Header["argument"] = "Argument";
    Header["short"] = "Short";
    Header["description"] = "Description";
})(Header = exports.Header || (exports.Header = {}));
//# sourceMappingURL=index.js.map