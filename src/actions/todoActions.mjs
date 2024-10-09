import { Todo } from '../components/Todo.mjs';
import { useFetch } from '../hooks/useFetch.mjs';

export const todoActions = {
	createTodo: (todoState) => {
		const newTodo = Todo();

		todoState.set(newTodo, { title: '', tasks: [] });
		document.querySelector('.todo-list').prepend(newTodo);
	},

	deleteTodo: (todoState, element) => {
		const todoElement = element.closest('.todo');
		const elementId = todoState.get(todoElement).id;

		useFetch('DELETE', null, elementId);
		todoState.delete(todoElement);
		todoElement.remove();
	},

	saveTodo: (todoState, element) => {
		const elementState = todoState.get(element.closest('.todo'));
		elementState.tasks = Array.from(elementState.tasks);

		if (elementState.title.length && elementState.tasks.length) {
			useFetch('POST', elementState);
		}
	},
};
