# ESLint Config for React

## What's Included?

- Recommended rules from _eslint_, _prettier_, _react_, _react-hooks_ and _react-refresh_;
- Prettier;
- React Plugin;
- React Hooks Plugin;
- React Refresh Plugin;
- Simple Import Sort Plugin.

## Installation and Usage

1. Install the package, as well as it's dependecies, as dev dependency:

```bash
$ npm i --save-dev @technohiru/eslint-config-react eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-simple-import-sort
```

2. Extend the default configuration file in the `.eslintrc.{json|js}` file:

**.eslintrc.json**

```json
{
  "extends": ["@technohiru/eslint-config-react/default.js"]
}
```

**.eslintrc.js**

```js
module.exports = {
  extends: ["@technohiru/eslint-config-react/default.js"],
};
```

3. Add these configurations to VS Code `settings.json` file for auto-fixing after every save:

```json
"editor.codeActionsOnSave": {
 "source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "javascriptreact"]
```

_(This ensures that simple-import-sort will be executed properly.)_
