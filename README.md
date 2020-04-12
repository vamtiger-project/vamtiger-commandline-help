# [VAMTIGER Commandline Help](https://github.com/vamtiger-project/vamtiger-commandline-help)
Get help text.

## Installation
[VAMTIGER Commandline Help](https://github.com/vamtiger-project/vamtiger-commandline-help) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/):
```bash
npm i vamtiger-commandline-help
```
or
```bash
yarn add vamtiger-commandline-help
```

Once installed, [VAMTIGER Commandline Help](https://github.com/vamtiger-project/vamtiger-commandline-help) can be imported.
```typescript
import getHelp from 'vamtiger-commandline-help';
```
or
```javascript
const getHelp = require('vamtiger-commandline-help').default;
```

Help text can then be referenced as a string table.
```javascript
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
/*
Args can be named as desired.
They just need to have the same key name mappings.

In this instances the column names will be
Args | Short | Description
*/
const help = getHelp({
    args,
    short,
    description
});

console.log(help);
/*
===================================================
| Args | Short | Description                  |
===================================================
| Argument | a     | Argument description         |
---------------------------------------------------
| Another  | A     | Another argument description |
---------------------------------------------------
*/
```
