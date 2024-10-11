export function Task(...props) {
	return `
    <div class="task-wrapper">
      <input
				name="task" 
        class="task" 
        placeholder="What you want to do?"
        autocomplete="off" 
        ${props}
			/>
    </div>
  `;
}
