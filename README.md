## React Scaffold
This is a basic scaffold to get started with a new React project without (all) the bloat and faff of CRA. It includes the following:
- [x] Axios
- [x] Redux
- [x] Redux-saga
- [x] Requested/Succeeded/Failed Middleware/Saga, based on presence of request in action
- [x] React Router
- [x] Dotenv
- [x] Lodash
- [x] Normalizr
- [x] ESLint
- [x] Jest
- [X] CI via GitHub Actions

Todo:
- [ ] GraphQL
- [ ] TypeScript/Flow

### Prerequisites
It's probably a good idea to use something like `nodenv`. We've included a `.node-version` file to make sure your nodenv uses a matching version of node with it.

### Fire it up
1. Run `npm run dev`
2. Go to `localhost:3000`

### ENV variables
Dotenv-webpack is included, if you'd like to use differing ENV vars for different environments. Put a dummy version of any ENV variables you want to include in the `.env.example` file and include a bit in your README like so:

```bash
cp .env.example .env
```

### Static Analysis

#### ESLint
ESLint is set up. You can run it with:
```shell
npm run lint
```

### Testing
Testing is provided by Jest.
Reference on assertions available:
- https://jestjs.io/docs/expect
- https://github.com/testing-library/jest-dom/#custom-matchers

Testing runs can be launched with:
```shell
npm run test
```
