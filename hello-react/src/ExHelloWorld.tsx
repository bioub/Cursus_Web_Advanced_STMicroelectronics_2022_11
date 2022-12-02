import { Component } from 'react';

class ExHelloWorld extends Component {
  render() {
    return (
      <div className="ExHelloWorld">
        <label>Name:</label>
        <input type="text" value="YOUR_NAME" />
        <hr />
        <h1>Hello YOU_NAME !</h1>
      </div>
    );
  }
}

export default ExHelloWorld;

/*
Exercice 1
Appeler ce composant depuis App.tsx comme ceci : <ExHelloWorld />
Créer les type ExHelloWorldProps et ExHelloWorldState
- ExHelloWorldProps est vide
- ExHelloWorldState contient une clé name de type string
Sur le state name créer une valeur par défaut (votre prénom)
Afficher cette valeur dans le composant à la place de YOUR_NAME
Ecouter comme dans UserForm le changement au niveau du champs
et mettre à jour la clé name du state
Le composant va se raffraichir automatiquement
*/