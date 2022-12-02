/*
<div class="Hello">
  Hello <span id="name">Romain</span>
</div>
*/

import React, { Component } from 'react';
import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Select from './Select';
import UserForm from './UserForm';

// Sans React (juste avec le DOM)
// function App() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';

//   const spanEl = document.createElement('span');
//   spanEl.id = 'name';
//   spanEl.append('Romain');

//   const now = new Date();
//   divEl.append('Hello ', spanEl, `, il est ${now.toLocaleTimeString()}`);

//   return divEl;
// }

// Avec React (Sans JSX)
// function App() {
//   const now = new Date();

//   return React.createElement(
//     'div',
//     { className: 'Hello' },
//     'Hello ',
//     React.createElement('span', { id: 'name' }, 'Romain'),
//     `, il est ${now.toLocaleTimeString()}`,
//   );
// }

// Avec React + JSX
// function App() {
//   const now = new Date();

//   return (
//     <div className="Hello">
//       Hello <span id="name">Romain</span>, il est {now.toLocaleTimeString()}
//     </div>
//   );
// }

type AppState = {
  name: string;
}

class App extends Component<unknown, AppState>  {
  state: Readonly<AppState> = {
    name: 'Titi',
  };

  handleValueChange = (value: string) => {
    this.setState({
      name: value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h2>Hello</h2>
        <Hello name={name} age={37} isActive /> {/* React.createElement(Hello, { name: 'Romain' }) */}
        
        <h2>Clock</h2>
        <Clock format="HH:mm:ss" />
        <Clock format="HH:mm:ss" />
        <Clock format="HH:mm:ss" />
  
        <h2>Counter</h2>
        <Counter />
  
        <h2>UserForm</h2>
        <UserForm />
  
        <h2>ExHelloWorld</h2>
        <ExHelloWorld />
  
        <h2>ExMultiStateButton</h2>
        <ExMultiStateButton items={['Toto', 'Titi', 'Tata']} />
        <p>Vous avez sélectionné : {name}</p>
  
        <h2>Select</h2>
        <Select items={['Toto', 'Titi', 'Tata']} value={name} onValueChange={this.handleValueChange} />
        <p>Vous avez sélectionné : {name}</p>
      </div>
    );
  }
}

export default App;
