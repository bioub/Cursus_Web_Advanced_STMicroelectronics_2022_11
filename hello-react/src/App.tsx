/*
<div class="Hello">
  Hello <span id="name">Romain</span>
</div>
*/

import React from 'react';
import Clock from './Clock';
import Counter from './Counter';
import Hello from './Hello';
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

function App() {
  return (
    <div className="App">
      <Hello name="Romain" /> {/* React.createElement(Hello, { name: 'Romain' }) */}
      <Clock format="HH:mm:ss" />
      <Clock format="HH:mm:ss" />
      <Clock format="HH:mm:ss" />
      <Counter />
      <UserForm />
    </div>
  );
}

export default App;
