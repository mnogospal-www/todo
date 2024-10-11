import { Task } from '../components/Task.mjs';

export const taskActions = {
	addTask: (todoState, button) => {
		const newTask = Task();
		const todoElement = button.closest('.todo');
		const taskList = todoElement.querySelector('.task-list');

		console.log(todoState);

		taskList.insertAdjacentHTML('beforeend', newTask);
	},

	deleteTask: (todoState, button) => {
		const todoElement = button.closest('.todo');
		const taskList = todoElement.querySelector('.task-list');

		if (taskList.children.length > 1) {
			todoState
				.get(todoElement)
				.tasks.delete(taskList.lastElementChild.lastElementChild);
			taskList.lastElementChild.remove();
		}
	},
};
