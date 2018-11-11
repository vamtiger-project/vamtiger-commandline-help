import { expect } from 'chai';
import getHelp from '..';

const args = {
    argument: 'Argument',
    anotherArgument: 'Another'
};
const short = {
    argument: 'a',
    anotherArgument: 'A'
}
const description = {
    argument: 'Argument description',
    anotherArgument: 'Another argument description'
};
const help = getHelp({
    args,
    short,
    description
});

describe('vamtiger-help: should return', function () {
    it('help text', function () {
        expect(help).to.be.ok;
    })
});