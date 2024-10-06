import { Task } from './Task.mjs';

export function Todo() {
	const todoElement = document.createElement('div');
	todoElement.classList.add('todo');
	todoElement.innerHTML = `
    <input
      type="text"
      class="title"
      placeholder="Todo title"
    />
    <div class="task-list">
      ${Task()}
    </div>
    <div class="buttons">
      <div>
        <button data-action="addTask">+</button>
        <button data-action="deleteTask">-</button>
      </div>
      <button data-action="deleteTodo">Delete</button>
    </div>
  `;

	return todoElement;
}
