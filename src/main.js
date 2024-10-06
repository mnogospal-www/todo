import { Todo } from './components/Todo.mjs';
import { todoActions } from './actions/todoActions.mjs';

const createTodoButton = document.querySelector('.create-todo-button');
createTodoButton.onclick = () => {
	addTodoLayout(Todo());
};

function addTodoLayout(todoElement) {
	document
		.querySelector('.todo-list')
		.insertAdjacentElement('afterbegin', todoElement);
	taskActionHandler(todoElement);
}

function taskActionHandler(todoElement) {
	const taskActionButtons = Array.from(
		todoElement.querySelectorAll('[data-action]')
	);

	taskActionButtons.forEach((button) => {
		button.onclick = (event) => {
			todoActions[event.target.dataset.action](todoElement);
		};
	});
}
