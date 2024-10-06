import { Task } from '../components/Task.mjs';

export const todoActions = {
	deleteTodo: (todoElement) => {
		todoElement.remove();
	},

	deleteTask: (todoElement) => {
		const taskList = todoElement.children[1];
		if (taskList.children.length > 1) {
			taskList.lastElementChild.remove();
		}
	},

	addTask: (todoElement) => {
		const taskList = todoElement.children[1];
		taskList.insertAdjacentHTML('beforeend', Task());
	},
};
