let button = document.getElementById("button");
let input = document.getElementById("input");
let todoListEl = document.getElementById("todolist");
let todoList = [];

function add(){
    if(input.value != ""){
        todoList.push(input.value);
        input.value = "";
        appendList();
    }
    
}

button.addEventListener('click', add);

function appendList(){
    todoListEl.innerHTML = null;
    todoList.forEach((el, index)=>{
        todoListEl.innerHTML += `<li>${el} <a onClick=editList(${index})> Edit</a> <a onClick = deleteList(${index})> X | &nbsp </a></li>`
    }
    )
}

function editList(index){
    appendList();
    let value = prompt();
    if(value==""){
        appendList();
    }else{
        todoList[index] = value;
        appendList();}
}

function deleteList(index){
    todoList.splice(index, 1);
    appendList();
}