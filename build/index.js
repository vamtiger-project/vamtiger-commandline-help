"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vamtiger_get_string_table_1 = require("vamtiger-get-string-table");
const lodash_1 = require("lodash");
exports.default = (params, opts) => {
    const header = Object.keys(params);
    const rowKeys = Object.keys(params[header[0]]).sort();
    const body = [];
    let row;
    let rowColumn;
    let help;
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
    help = vamtiger_get_string_table_1.default({
        header: header.map(lodash_1.startCase),
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
var StringConstant;
(function (StringConstant) {
    StringConstant["doubleDash"] = "--";
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
//# sourceMappingURL=index.js.map