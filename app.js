let inputBox = document.getElementById("input-box");
let listTask = document.getElementById("tasks-list");


function addTask() {
    if (inputBox.value === '') {
        alert("Add Some To-Do Task !")
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listTask.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTask();
}


listTask.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("list");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

function saveTask(){
    localStorage.setItem('Tasks',listTask.innerHTML);
}
function showTask(){
    listTask.innerHTML = localStorage.getItem('Tasks')
}
showTask();