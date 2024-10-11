import { Todo } from '../components/Todo.mjs';
import { useFetch } from '../hooks/useFetch.mjs';

export const todoActions = {
	createTodo: (todoState, button) => {
		const newTodo = Todo();

		todoState.set(newTodo, { title: '', tasks: new Map() });
		document.querySelector('.todo-list').prepend(newTodo);
	},

	deleteTodo: (todoState, button) => {
		const todoElement = button.closest('.todo');
		const elementId = todoState.get(todoElement).id;

		useFetch('DELETE', null, elementId);
		todoState.delete(todoElement);
		todoElement.remove();
	},

	saveTodo: (todoState, button) => {
		const todoElement = button.closest('.todo');
		const elementState = todoState.get(todoElement);
		const validity =
			elementState.title.length > 0 && elementState.tasks.size > 0;

		switch (validity) {
			case true: {
				elementState.tasks = Array.from(elementState.tasks).map(
					(item) => item[1]
				);

				elementState.id
					? useFetch('PUT', { ...elementState }, elementState.id)
					: useFetch('POST', elementState);

				todoElement.querySelector('.status').textContent = 'saved';
				todoElement.classList.remove('invalid');
				break;
			}

			case false: {
				if (!elementState.id) {
					todoElement.classList.add('invalid');
				}
				break;
			}
		}
	},
};
