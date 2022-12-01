# Exercice Webpack

## Exercice 1

Ajouter un commentaire dans le fichier `config.json`

Le build échoue à présent.

Installer le paquet npm `json5` et changer la config webpack en vous inspirant de :
https://github.com/webpack/webpack/tree/main/examples/custom-json-modules

Pour que le parseur d'un fichier dont l'extension est `.json` utilise la lib json5.

Bonus : faire fonctionner les extensions `.json5`, à voir avec TypeScript...

## Exercice 2

En vous inspirant de la doc sur BannerPlugin :
https://webpack.js.org/plugins/banner-plugin/

Ajouter le copyright suivant aux fichiers buildés : `Copyright STMicroelectronics`

## Exercice 3

Créer un fichier `index.css` avec comme contenu :

```css
.horloge {
  background-color: yellow;
}
```

Le charger dans `index.ts` en utilisant un import :

```ts
import './index.css';
````

Utiliser les loaders : `css-loader` et `style-loader` pour transformer cet `import` en balise `style`

Doc : https://webpack.js.org/loaders/css-loader

Bonus : dans le build de production uniquement, ne pas utiliser `style-loader` mais générer un fichier css séparer à charger avec un balise link. Pour cela utiliser mini-css-extract-plugin : https://webpack.js.org/plugins/mini-css-extract-plugin/

