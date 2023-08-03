const todoList = [{
  name: 'make dinner',
  dueDate: ' 2022-05-20',
},
{

  name: 'wash dishes',
  dueDate: ' 2020-02-20'
}];

renderToDo();


function renderToDo(){
let todoListHtml = '';

for(let i=0; i<todoList.length; i++){
  const todoObject = todoList[i];
  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  const html = `<p>
  ${name}${dueDate} <button onclick="
  todoList.splice(${i},1);

  renderToDo();
  
  
  ">Delete</button>
  </p>`;
  todoListHtml += html;

}
console.log(todoListHtml);
document.querySelector('.js-todo-list')
.innerHTML = todoListHtml;
}
function addTo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value
  todoList.push({
    name: name,
    dueDate: dueDate
  });
  console.log(todoList);

  inputElement.value = '';

  renderToDo();

}