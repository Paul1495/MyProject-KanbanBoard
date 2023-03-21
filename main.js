


const switchLocation = (taskName,fromLocation,toLocation)=>{
    // Check if from Location contain item with taskName

    // If exists
    // Delete item in fromLocation
    // Create item in toLocation
    
    // Update data in localStorage

}

function recordDataInput() {
    let inputDescription = document.getElementById('input-description').value;
    let inputTypeKanban = document.getElementById('input-type').value;
    
if (inputDescription === '') {
    document.getElementById('inputDescription-error').innerHTML = 'Pls enter the ';
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
        this.drawTodoReport();
    } else {
        alert("Vui lòng kiểm tra lại dữ liệu");
    };

    resetInput();
};

function drawTodoReport() {
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    let import_ToDoTable = `<div class="title">To Do</div>`;
        if (data_ToDoBox != null) {
            data_ToDoBox.forEach((prop, i) => {
                import_ToDoTable += `
                <div class="kanban-box" id="${prop.todo_Description}}">
                <span>${prop.todo_Description}</span>
                <button onclick="editDescription(${i})">Edit</button>
                <button onclick="deleteData(${i})">Delete</button>
            </div>
            `
            });
        };
        document.getElementById('todo-box').innerHTML = import_ToDoTable;
};

// Function edita Data - allow user get Data from inside localstorage and link it to input description
function editDescription(i){
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    document.getElementById('input-description').value = data_ToDoBox[i].todo_Description
    document.getElementById('input-type').value = data_ToDoBox[i].inputTypeKanban
    document.getElementById('index').value = i

    document.getElementById('save-information').style.display = "none"
    document.getElementById('change-information').style.display = "inline-block"
};  

// Function change Data - allow user change data inside localstorage after change data input
function changeData() {
    let description = document.getElementById('input-description').value;
    let inputtypekanban = document.getElementById('input-type').value;

    if (inputtypekanban === "ToDo") {
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    let index = document.getElementById('index').value
    data_ToDoBox[index]={
        todo_Description: description,
        inputTypeKanban: inputtypekanban
    }
    localStorage.setItem('data_ToDoBox', JSON.stringify(data_ToDoBox));

    drawTodoReport();

    } else if(inputtypekanban === "Inprogress") {
        let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
            data_InprogressBox.push({
                inprogress_Description: description,
                inputTypeKanban: inputtypekanban,
            });
            localStorage.setItem('data_InprogressBox', JSON.stringify(data_InprogressBox));
            this.drawInprogressReport();

        } else if (inputtypekanban === "Done") {
            let data_DoneBox = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];
                data_DoneBox.push({
                    done_Description: description,
                    inputTypeKanban: inputtypekanban,
                });
                localStorage.setItem('data_DoneBox', JSON.stringify(data_DoneBox));
                this.drawDoneReport();

            } else {
                alert("Vui lòng kiểm tra lại dữ liệu");
            };

        document.getElementById('save-information').style.display = "inline-block"
        document.getElementById('change-information').style.display = "none"
        resetInput();
};


function drawTodoV2(){
    const parentElement = document.getElementById('todo-box-2');
    const header = "To do";
    const color = "pink";
    const data_ToDoBox = localStorage.getItem('') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];

    drawTask(parentElement,header,color,data_ToDoBox);
}


function drawTodoV2(){
    const parentElement = document.getElementById('todo-box-2');
    const header = "To do";
    const color = "pink";
    const data_ToDoBox = localStorage.getItem('') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];

    drawTask(parentElement,header,color,data_ToDoBox);
}



function drawTodoV2(){
    const parentElement = document.getElementById('todo-box-2');
    const header = "To do";
    const color = "pink";
    const data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];

    drawTask(parentElement,header,color,data_InprogressBox);
}

function drawTask(parentElement,header,color,data){
    parentElement.style.backgroundColor = color;
    let content = `<div class="title">${header}</div>`;
            if (data != null) {
                data.forEach((prop) => {
                    content += `
                    <div class="kanban-box">
                    <span>${prop.inprogress_Description}</span>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                `
                });
            };
    parentElement.innerHTML = content;
}

function drawInprogressReport() {
    let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
    let import_InprogressTable = `<div class="title">In Progress</div>`;
            if (data_InprogressBox != null) {
                data_InprogressBox.forEach((prop) => {
                    import_InprogressTable += `
                    <div class="kanban-box">
                    <span>${prop.inprogress_Description}</span>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                `
                });
            };
            document.getElementById('inprogress-box').innerHTML = import_InprogressTable;
};

function drawDoneReport() {
    let data_DoneBox = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];
    let import_DoneTable = `<div class="title">Done</div>`;
                if (data_DoneBox != null) {
                    data_DoneBox.forEach((prop) => {
                        import_DoneTable += `
                        <div class="kanban-box">
                        <span>${prop.done_Description}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    `
                    });
                };
                document.getElementById('done-box').innerHTML = import_DoneTable;

};

// Function delete data on local storage
function deleteData(i) {
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
        data_ToDoBox.splice(i, 1)
    localStorage.setItem('data_ToDoBox', JSON.stringify(data_ToDoBox));
    drawTodoReport();
};

// Function reset data
function resetInput() {
    document.getElementById('input-description').value =""
    document.getElementById('input-type').value = ""
};



drawTodoV2();