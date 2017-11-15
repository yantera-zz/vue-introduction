const todoArea = document.getElementsByClassName('todo')[0];
const finishArea = document.getElementsByClassName('finish')[0];

function getText() {
  const textArea = document.getElementsByClassName('note-todo')[0];
  return textArea.value;
}

document.getElementById('add').addEventListener('click', function(event) {
  if (getText() == '') return;

  const div = document.createElement('div');
  div.classList.add('card');

  const p = document.createElement('p');
  p.classList.add('todo-content');
  p.innerText = getText();
  div.appendChild(p);

  const btn = document.createElement('button');
  btn.classList.add('s-btn');
  btn.classList.add('finish-btn');
  btn.innerText = 'finish';
  div.appendChild(btn);

  todoArea.appendChild(div);
});
