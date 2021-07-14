# Code for Test Automation University course *Cypress Tutorial*


URL: https://testautomationu.applitools.com/cypress-tutorial/

## Installation notes
- `node --version` > 10
- Visual Studio Code
- `npm init -y` - to create `package.json`
- `npm install cypress@3`


You can now open Cypress by running: `node_modules/.bin/cypress open` or by `npx cypress open`.


Set autocomplete to VS Code

`/// <reference types="cypress" />`

## Cypress CLI

- `npx cypress run` - unlike `open` it runs non interactively with headless Chrome

- `npx cypress run --help`

-`npx cypress run --spec cypress/integration/todomvc-actions.spec.js` - runs a specific file
