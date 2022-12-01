import css from './horloge.module.scss';
import config from './config.json5';

export class Horloge {
  constructor(private container: HTMLElement) {
    container.classList.add(css.horloge);
  }

  _render() {
    const now = new Date();
    this.container.innerText = now.toLocaleTimeString();
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), config.delay);
  }
}
