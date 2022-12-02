import { Component } from "react";

class ExMultiStateButton extends Component {
  render() {
    return <button className="ExMultiStateButton">ExMultiStateButton</button>;
  }
}

export default ExMultiStateButton;

/*
Exercice 2
Appeler ce composant depuis App.tsx comme ceci : <ExMultiStateButton items={['Toto', 'Titi', 'Tata']} />
Créer les type ExMultiStateButtonProps et ExMultiStateButtonState
- ExMultiStateButtonProps contient une clé items de type tableau de string
- ExMultiStateButtonState contient une clé value de type string
Dans le state de ExMultiStateButton créé une clé value avec comme valeur par défault 'Titi'
Dans le bouton en JSX afficher la clé value du state
Ecouter le clic du bouton et affecter à la clé value du state le prochain élément du tableau items
s'il vous êtes sur le dernier élément repartir au début
Le composant va se raffraichir automatiquement
*/