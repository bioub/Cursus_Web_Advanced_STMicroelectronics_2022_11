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

# Exercise 2

Create an `HttpClientInterface` that define the get method from `HttpClient`

This method should return `Promise<T>` (where `T` is the generic type)

Create a `FakeHttpClient` class that implement `HttpClientInterface`

This class should contain :

```
private data!: any;
async get(url: string) {
  return await this.data;
}
setFakeData(data: any) {
  this.data = data;
}
```

Replace the `HttpClient` with `FakeHttpClient` in `UserService.test.ts` and test the value you inject with `setFakeData` is the one you get in the `userService.fetchUsers()` method.

# Exercise 3

Create a `container.ts` that will export the `container` object

Add the `@injectable` decorator in the following class :

- `UserPage`
- `UserService`
- `HttpClient`
- `FakeHttpClient`

Define the injection Symbol in the `HttpClientInterface`

Use the `@inject` decorator in `UserService` to inject the `HttpClientInterface` key

In `container.ts` define the following services using the class as key and value (`.toSelf()`) :

- `UserPage`
- `UserService`
- `HttpClient`
- `FakeHttpClient`

Bind the `HttpClientInterface` Symbol to service `HttpClient`

Rewrite the `index.ts` and `UserService.test.ts` program (launch with `npm start` and `npm test`) to make it get their dependencies from the `container`

Using container snapshots, replace the binding of `HttpClientInterface` to service `FakeHttpClient` in the test only :
https://github.com/inversify/InversifyJS/blob/master/wiki/container_snapshots.md
