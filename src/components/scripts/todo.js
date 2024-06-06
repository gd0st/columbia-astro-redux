/**
 * Constructs the Todo object
 * @param {string} subject
 * @param {boolean} done
 */
function makeTodo(subject, done) {
	let todo = {
		subject: subject,
		done: done,
	};

	let div = document.createElement("div");
	div.className = "todo";
	let input = document.createElement("input");
	input.type = "checkbox";
	let label = document.createElement("label");
	label.textContent = subject;
	div.appendChild(input);
	div.appendChild(label);
	return div;
}