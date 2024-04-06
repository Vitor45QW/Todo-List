const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');




function clearInput() {

    todoInput.value = ''; 

}



function addButton(newTask) {
    const todoItem = document.createElement('li');
    todoItem.textContent = newTask;
    todoList.appendChild(todoItem);

    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove task'
    todoItem.appendChild(removeButton);

        removeButton.addEventListener('click', function (){

            todoItem.remove();
            removeButton.remove();
            
            

            })


}



todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    newTask = todoInput.value.trim();

    if (newTask !== '') {

            addButton(newTask);
            clearInput();
    }

})