## Packages

- `express` - create server package
- `logger` - HTTP request logger middleware for node.js
- `cors` - Enable CORS: allows cross-requests from different addresses.
- `Joi` - Checking request body: schema description language and data validator
- `multer` - Allows upload files together with fields
- [`gravatar`](https://www.npmjs.com/package/gravatar) - Generate avatars

## Tests

- [`jest`](https://jestjs.io/) - program test for js

for ES5 project enough: `npm i --save-dev jest`

for ES6 must be add: `npm i --save-dev @jest/globals`

- [`supertest`](https://www.npmjs.com/package/supertest) - Imitates HTTP-request (npm install supertest --save-dev)

## For render to render.com needs add to package.json:

```js
  "engines": {
    "node": "20.11" // current version on my PC
  }
```
