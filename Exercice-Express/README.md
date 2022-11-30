# Exercices Mongoose

Sur le modèle du dossier `todos` créer une nouvelle resource `users`

Créer 2 routes :

- `POST /api/users/register`
- `POST /api/users/login`

Créer un schéma et un modèle Mongoose avec 2 clés :

- `username` de type `string`
- `password` de type `string`

Dans le controller `register` insérer le user reçu dans le body de la requête et répondre en JSON {msg: 'Registered'}

Dans le controller `login` vérifier avec la méthode `findOne` du modèle que le `username` et password reçu dans le body de la requête correspondent a un utilisateur, répondre en JSON `{msg: 'Logged in'}` ou `{msg: 'Bad credentials'}` si le username ou password n'existent pas en base.


# Test automatisées

## authenticate (doubles avec sinon)

Dans ce projet, installer tous les bibliothèque de tests installées dans le projet `Tests-Mocha` : `mocha, chai, @types/sinon...`

Dans le package.json reprendre les 2 scripts de test (test et coverage)

Tester la fonction `authenticate` de `middleware.ts` en créant des objets `req`, `res` et une fonction `next` vous même :

```js

it('should...', () => {
  const req = { /*...*/ } as any;
  const res = { /*...*/ } as any;
  const next = sinon.spy();

  authenticate(req, res, next);
})
```

Vérifier que l'appel de `res.json` se fasse correctement et que le `statusCode` soit le bon.

## userLoginCtrl (async + doubles avec sinon)

Tester `userLoginCtrl` de `users/controller.ts` en remplacer avec Sinon la
méthode `findOne` de `User` et gérer le fait qu'elle retourne une promesse.


