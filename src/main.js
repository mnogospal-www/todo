import { Todo } from './components/Todo.mjs';
import { todoActions } from './actions/todoActions.mjs';

const createTodoButton = document.querySelector('.create-todo-button');
createTodoButton.onclick = () => {
	addTodoLayout();
};

function addTodoLayout() {
	const todoElement = Todo();
	document
		.querySelector('.todo-list')
		.insertAdjacentElement('afterbegin', todoElement);
	taskOperationHandler(todoElement);
}

function taskOperationHandler(todoElement) {
	const taskActionButtons = Array.from(
		todoElement.querySelectorAll('[data-action]')
	);

	taskActionButtons.map((button) => {
		button.onclick = (event) => {
			todoActions[event.target.dataset.action](event.target);
		};
	});
}
