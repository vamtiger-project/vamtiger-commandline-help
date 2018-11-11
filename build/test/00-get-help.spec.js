"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("..");
const args = {
    argument: 'Argument',
    anotherArgument: 'Another'
};
const short = {
    argument: 'a',
    anotherArgument: 'A'
};
const description = {
    argument: 'Argument description',
    anotherArgument: 'Another argument description'
};
const help = __1.default({
    args,
    short,
    description
});
describe('vamtiger-help: should return', function () {
    it('help text', function () {
        chai_1.expect(help).to.be.ok;
    });
});
//# sourceMappingURL=00-get-help.spec.js.map