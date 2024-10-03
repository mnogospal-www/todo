export function todoComponent() {
	const todoElement = document.createElement('div');
	todoElement.classList.add('todo-item');
	todoElement.innerHTML = `
    <input
      type="text"
      class="todo-item__title"
      placeholder="Todo title"
    />
    <div class="todo-tasks">
      <input
        type="text"
        class="todo-task__item"
        placeholder="What you want to do?"
      />
    </div>
    <div class="todo-item-buttons">
      <div>
        <button data-todo-action="addTask">+</button>
        <button data-todo-action="deleteTask">-</button>
      </div>
      <button data-todo-action="deleteTodo">delete</button>
    </div>
  `;

	return todoElement;
}
