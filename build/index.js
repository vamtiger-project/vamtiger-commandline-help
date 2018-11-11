"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = require("vamtiger-get-string-table/build");
exports.default = ({ args, short, description }) => {
    const header = [
        Header.argument,
        Header.short,
        Header.description
    ];
    const body = [];
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
    });
    help = build_1.default({
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