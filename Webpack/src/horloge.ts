import config from './config.json';

export class Horloge {
  constructor(private container: HTMLElement) {}

  _render() {
    const now = new Date();
    this.container.innerText = now.toLocaleTimeString();
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), config.delay);
  }
}
