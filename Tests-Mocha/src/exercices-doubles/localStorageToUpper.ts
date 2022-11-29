// difficulté ici
// localStorage n'existe pas dans Node.js
// il faut le créer dans le test (globalThis.localStorage = ...)

export function localStorageToUpper(key: string) {
  return localStorage.getItem(key)?.toUpperCase();
}
