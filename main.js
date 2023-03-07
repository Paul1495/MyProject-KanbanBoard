// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }


function recordDataToDoInput() {
    let inputDescription = document.getElementById('input-description').value;
    let inputTypeKanban = document.getElementById('input-type').value;
    
if (inputDescription === '') {
    document.getElementById('inputDescription-error').innerHTML = 'Pls enter the description';
} else {
    document.getElementById('inputDescription-error').innerHTML = '';
}

if (inputTypeKanban === '') {
    document.getElementById('inputType-error').innerHTML = 'Pls enter the type of Kanban board';
} else {
    document.getElementById('inputType-error').innerHTML = '';
}

if (inputDescription && (inputTypeKanban === "To Do")) 
 {

    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    data_ToDoBox.push({
        todo_Description: inputDescription,
        inputTypeKanban: inputTypeKanban,
     });
 
     localStorage.setItem('data_ToDoBox', JSON.stringify(data_ToDoBox));
 
     this.drawDataToDoReport();
     };
};

function drawDataToDoReport()// Draw Import Table
 { 
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
     let import_ToDoTable = `<tr>
        <td>Description-Todo</td>
        </tr>`;
     if (data_ToDoBox != null) {
        data_ToDoBox.forEach((prop, i) => {
            import_ToDoTable += `<tr>
             <td>${i+1}</td>
             <td>${prop.todo_Description}</td>
             </tr>`
         });
     };
};

