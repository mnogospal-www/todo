import { inputComponent } from './components/inputComponent.mjs';
import { todoComponent } from './components/todoComponent.mjs';

const createTodoButton = document.querySelector('.create-todo-button');
createTodoButton.onclick = () => {
	addTodoLayout();
};

const todoOperations = {
	deleteTodo: (element) => {
		const todoItem = element.closest('.todo-item');
		todoItem.remove();
	},

	deleteTask: (element) => {
		const todoTasks =
			element.closest('.todo-item-buttons').previousElementSibling.children;
		const lastTask = todoTasks[todoTasks.length - 1];

		if (todoTasks.length > 1) {
			lastTask.remove();
		}
	},

	addTask: (element) => {
		const todoTasks =
			element.closest('.todo-item-buttons').previousElementSibling;
		todoTasks.insertAdjacentHTML('beforeend', inputComponent());
	},
};

function addTodoLayout() {
	const todoElement = todoComponent();
	document
		.querySelector('.todo-items-list')
		.insertAdjacentElement('afterbegin', todoElement);
	taskOperationHandler(todoElement);
}

function taskOperationHandler(todoElement) {
	const taskActionButtons = Array.from(
		todoElement.querySelectorAll('[data-todo-action]')
	);

	taskActionButtons.map((button) => {
		button.onclick = (event) => {
			todoOperations[event.target.dataset.todoAction](event.target);
		};
	});
}
