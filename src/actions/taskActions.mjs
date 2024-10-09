import { Task } from '../components/Task.mjs';

export const taskActions = {
	addTask: (todoState, element) => {
		const newTask = Task();
		const todoElement = element.closest('.todo');
		const taskList = todoElement.querySelector('.task-list');

		taskList.insertAdjacentHTML('beforeend', newTask);
	},

	deleteTask: (todoState, element) => {
		const todoElement = element.closest('.todo');
		const taskList = todoElement.querySelector('.task-list');

		if (taskList.children.length > 1) {
			taskList.lastElementChild.remove();
		}
	},
};
