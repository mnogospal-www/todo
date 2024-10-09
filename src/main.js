import { rootAction } from './actions/rootAction.mjs';
import { useFetch } from './hooks/useFetch.mjs';
import { Todo } from './components/Todo.mjs';

const todoState = new Map();

let mutationObserver = new MutationObserver(actionHandler);
mutationObserver.observe(document.querySelector('.todo-list'), {
	childList: true,
});

function actionHandler() {
	const actionButtons = Array.from(document.querySelectorAll('[data-action]'));

	actionButtons.map((button) => {
		button.onclick = () => {
			rootAction[button.dataset.typeAction][button.dataset.action](
				todoState,
				button
			);

			taskHandler();
		};
	});
}

function taskHandler() {
	const inputs = Array.from(document.querySelectorAll('input'));

	inputs.map((input) => {
		input.onchange = () => {
			input.name === 'title'
				? (todoState.get(input.closest('.todo')).title = input.value)
				: todoState.get(input.closest('.todo')).tasks.push(input.value);
		};
	});
}

async function initiateTodoState() {
	const data = await useFetch('GET');

	data.forEach((todoProps) => {
		const element = Todo(todoProps);
		const value = {
			title: todoProps.title,
			tasks: todoProps.tasks,
			id: todoProps.id,
		};

		todoState.set(element, value);
		document.querySelector('.todo-list').prepend(element);
	});
}

actionHandler();
initiateTodoState();
