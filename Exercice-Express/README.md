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

