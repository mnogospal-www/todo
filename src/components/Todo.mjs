import { Button } from './Button.mjs';
import { Task } from './Task.mjs';

export function Todo(props) {
	const todoElement = document.createElement('div');
	todoElement.classList.add('todo');
	todoElement.innerHTML = `
    <input 
			name="title"
			class="todo-title" 
			placeholder="Title" 
			${props && `value="${props.title}"`}
		/>

		<div class="task-list">
      ${
				props
					? props.tasks.map((task) => Task(`value="${task}"`)).join('')
					: Task()
			}
    </div>

		<div class="buttons">
			<div>
        ${Button('+', { action: 'addTask', type: 'taskActions' })}
        ${Button('-', { action: 'deleteTask', type: 'taskActions' })}
			</div>
			<div>
        ${Button('Save', { action: 'saveTodo', type: 'todoActions' })}
        ${Button('Delete', { action: 'deleteTodo', type: 'todoActions' })}
			</div>
		</div>
  `;

	return todoElement;
}
