export function Button(label, props) {
	return `
    <button 
      data-action="${props.action}" 
      data-type-action="${props.type}"
    >
			${label}
		</button>
  `;
}
