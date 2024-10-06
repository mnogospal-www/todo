import { Task } from '../components/Task.mjs';

export const todoActions = {
	deleteTodo: (element) => {
		const todoItem = element.closest('.todo');
		todoItem.remove();
	},

	deleteTask: (element) => {
		const todoTasks =
			element.closest('.buttons').previousElementSibling.children;
		const lastTask = todoTasks[todoTasks.length - 1];

		if (todoTasks.length > 1) {
			lastTask.remove();
		}
	},

	addTask: (element) => {
		const todoTasks = element.closest('.buttons').previousElementSibling;
		todoTasks.insertAdjacentHTML('beforeend', Task());
	},
};
