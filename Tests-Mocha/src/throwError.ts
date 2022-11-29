export function throwError(error = false) {
  if (error) {
    throw new Error('Une erreur');
  }
}