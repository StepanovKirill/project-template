# project-template
Template project React app create with:
- CRA
- TypeScript
- SCSS & CSS modules
- ESlint
- husky
- Jest
- GHA

### husky:
pre-commit hook with prettify & lint fix
pre-push hook with run tests

### GHA:
run tests on push into branch
auto deploy to gh-pages on push into main

### usage:
npm i && npm start

Make new SSH-key and set public key to Deploy keys in your repo.
Secret key set to Repository secrets with name DEPLOY_KEY.