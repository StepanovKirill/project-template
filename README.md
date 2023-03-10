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

Make new SSH-key and set public key to Deploy keys with any title in your repo.
Secret key set to Repository secrets with title DEPLOY_KEY.

- Go to repo settings
- Select Actions -> General
- In Workflow permissions, select Read and write permissions
![image](https://user-images.githubusercontent.com/71179735/224254103-34a41fd9-6d38-4846-817e-3a31817bf3d4.png)

- Go to repo settings again
- On tab Pages select Deploy from a branch and select gh-pages as branch for GH-Pages site
![image](https://user-images.githubusercontent.com/71179735/224254512-2570f460-b340-4d71-99c9-df38d75c2178.png)
