document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('task-input').value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        document.getElementById('task-list').prepend(li);
        document.getElementById('task-input').value = '';

        li.querySelector('input').addEventListener('change', () => li.classList.toggle('completed'));
        li.querySelector('.edit').addEventListener('click', () => {
            const newText = prompt('Edit task', li.querySelector('span').textContent);
            if (newText) li.querySelector('span').textContent = newText;
        });
        li.querySelector('.delete').addEventListener('click', () => li.remove());
    }
});
