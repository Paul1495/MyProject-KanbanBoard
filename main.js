// // function allowDrop(ev) {
// //     ev.preventDefault();
// // }

// // function drag(ev) {
// //     ev.dataTransfer.setData("text", ev.target.id);
// // }

// // function drop(ev) {
// //     ev.preventDefault();
// //     var data = ev.dataTransfer.getData("text");
// //     ev.target.appendChild(document.getElementById(data));
// // }


function recordDataInput() {
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

if (((inputDescription).length < 50) && (inputTypeKanban === "ToDo")) 
    {
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    data_ToDoBox.push({
        todo_Description: inputDescription,
        inputTypeKanban: inputTypeKanban,
     });
     localStorage.setItem('data_ToDoBox', JSON.stringify(data_ToDoBox));
     this.drawDataToDoReport();

    } else if (inputDescription && (inputTypeKanban === "Inprogress")) {
        let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
        data_InprogressBox.push({
            inprogress_Description: inputDescription,
            inputTypeKanban: inputTypeKanban,
        });
        localStorage.setItem('data_InprogressBox', JSON.stringify(data_InprogressBox));
        this.drawDataInprogressReport();

    } else if (inputDescription && (inputTypeKanban === "Done")) {
            let data_DoneBox = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];
            data_DoneBox.push({
                done_Description: inputDescription,
                inputTypeKanban: inputTypeKanban,
            });
            localStorage.setItem('data_DoneBox', JSON.stringify(data_DoneBox));
            this.drawDataDoneReport();

    } else {
        alert("Vui lòng kiểm tra lại dữ liệu");
    };
};

function drawDataToDoReport()// Draw Import Table
 { 
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
     let import_ToDoTable = `<tr>
        <td>Description</td>
        </tr>`;
     if (data_ToDoBox != null) {
        data_ToDoBox.forEach((prop, i) => {
            import_ToDoTable += `<tr>
             <td>${prop.todo_Description}</td>
             </tr>`
         });
     };
     document.getElementById('todo-card').innerHTML = import_ToDoTable;
};

function drawDataInprogressReport()// Draw Import Table
 { 
    let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
     let import_InprogressTable = `<tr>
        <td>Description</td>
        </tr>`;
     if (data_InprogressBox != null) {
        data_InprogressBox.forEach((prop, i) => {
            import_InprogressTable += `<tr>
             <td>${prop.inprogress_Description}</td>
             </tr>`
         });
     };
     document.getElementById('inprogres-card').innerHTML = import_InprogressTable;
};

function drawDataDoneReport()// Draw Import Table
 { 
    let data_DoneBox = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];
     let import_DoneTable = `<tr>
        <td>Description</td>
        </tr>`;
     if (data_DoneBox != null) {
        data_DoneBox.forEach((prop, i) => {
            import_DoneTable += `<tr>
             <td>${prop.done_Description}</td>
             </tr>`
         });
     };
     document.getElementById('done-card').innerHTML = import_DoneTable;
};

