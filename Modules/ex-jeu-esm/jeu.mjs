import { getRandomInt } from './random.mjs'; // import fichier local
import readline from 'readline'; // import binaire de Node.js
import chalk from 'chalk'; // import node_modules/chalk

export class Jeu {
  constructor(options) {
    this.min = options?.min ?? 0;
    this.max = options?.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = getRandomInt(this.min, this.max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà saisi : ' + this.essais.join(' - '));
    }

    this.rl.question(chalk.blue.bgYellow("Quel est le nombre ? "), (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}


const game = new Jeu();
game.jouer();

// pile d'appel
// ^
// |
// |                     question                question
// |question             jouer                   jouer
// |jouer   ..⟳..        taskQuestion  ..⟳..     taskQuestion ..⟳..
// +---------------------ENTREE------------------ENTREE---------------> temps
//
