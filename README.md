## React Scaffold
This is a basic scaffolding to get started with a new React project without the bloat and faff of CRA. It includes the following:
- [ ] Axios
- [ ] Redux
- [ ] Redux-saga
- [x] Lodash
- [x] Flow
- [x] ESLint
- [x] Jest
- [X] CI via GitHub Actions

## Prerequisites
It's probably a good idea to use something like `nodenv`. We've included a `.node-version` file to make sure your nodenv uses a matching version of node with it.

## Fire it up
1. Run `npm start`
2. Go to `localhost:8080`

###Static Analysis
#### Flow
Flow is like TypeScript but more incremental. You can specify which files to include in the analysis by adding the `//@flow` decorator at the top of any file. Analysis can be run by issuing:
```shell
npm run typecheck
```

#### ESLint
ESLint is set up. You can run it with:
```shell
npm run lint
```

## Testing
Testing is provided by Jest.
Reference on assertions available:
- https://jestjs.io/docs/expect
- https://github.com/testing-library/jest-dom/#custom-matchers

Testing runs can be launched with:
```shell
npm run test
```
