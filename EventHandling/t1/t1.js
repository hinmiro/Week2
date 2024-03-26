'use strict';

// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
let increment = 5;

const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const submitButton = document.querySelector('button[type="submit"]');
const addButton = document.querySelector('.add-btn');
const inputText = document.querySelector('input[type="text"]');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const todo = {
    id: increment++,
    task: inputText.value,
    completed: false,
  };
  todoList.push(todo);
  loadTodo();
  inputText.value = '';
  dialog.close();
});

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.showModal();
});

function loadTodo() {
  ul.innerHTML = '';
  todoList.forEach((item) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const deleteButton = document.createElement('button');

    label.textContent = item.task;
    input.type = 'checkbox';
    input.checked = item.completed;

    deleteButton.textContent = 'X';

    input.addEventListener('change', (event) => {
      event.preventDefault();
      item.completed = event.target.checked;
      console.log(item.task, item.completed);
    });

    deleteButton.addEventListener('click', (event) => {
      event.preventDefault();
      ul.removeChild(li);
      removeTodo(item.id);
    });

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}

function removeTodo(id) {
  todoList = todoList.filter((item) => item.id !== id);
}

// Program starts here
loadTodo();
