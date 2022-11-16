# Exercise 1

Split the `UserPage` class into 3 classes (each will contain only one method) :

- `UserPage` (`render` method)
- `UserService` (`fetchUsers` method)
- `HttpClient` (`get` method)

Each class should be defined in a separate file

Inject the dependencies :

`UserPage` -> `UserService` -> `HttpClient`

Launch the fake server with `npm run fake-server` then :

Rewrite the `index.ts` program (launch with `npm start`)

Rename the `UserPage.test.ts` to `UserService.test.ts` and rewrite the code (launch with `npm test`)
