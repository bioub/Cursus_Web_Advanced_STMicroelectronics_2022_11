import { fetchTodos } from './api.js';
import { createTodoItem } from './todos.js';

const formEl = document.querySelector('.todos-form') as HTMLFormElement;
const inputEl = document.querySelector('.todos-form-input') as HTMLInputElement;
const listEl = document.querySelector('.todos-list') as HTMLDivElement;
const toggleEl = document.querySelector('.todos-form-toggle') as HTMLInputElement;

formEl.addEventListener('submit', (event) => {
  // preventDefault empêche l'action par défaut
  // qui est d'aller vers la destination du form
  // (attribut action) ou recharger la page
  // si pas d'action
  event.preventDefault();

  const value = inputEl.value;

  // import('./todos.js').then(({ createTodoItem }) => {
  const itemEl = createTodoItem({
    id: Math.random(),
    title: value,
    completed: false,
  });

  listEl.append(itemEl);

  inputEl.value = '';
  // })
});

/*
Exercice 3
Dans le formulaire ajouter une balise
<input type="checkbox" class="todos-form-toggle">
au début du formulaire

Au clic de celle-ci, cocher ou décocher toutes les
checkbox de la liste
*/
toggleEl.addEventListener('click', () => {
  // const checkboxes = listEl.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
  const checkboxes = listEl.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleEl.checked;
  }
});

listEl.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('todos-delete')) {
    target.closest('.todos-item')?.remove();
  }
});

fetchTodos().then((todos) => {
  for (const todo of todos) {
    const itemEl = createTodoItem(todo);
    listEl.append(itemEl);
  }
});

inputEl.addEventListener('input', () => {
  localStorage.setItem('todo-input', inputEl.value);
});

const previousTodoInput = localStorage.getItem('todo-input');

if (previousTodoInput) {
  inputEl.value = previousTodoInput;
}
