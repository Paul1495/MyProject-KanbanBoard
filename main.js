

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
        this.drawTodoReport();

    } else if (inputDescription && (inputTypeKanban === "Inprogress")) {
            let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
            data_InprogressBox.push({
                inprogress_Description: inputDescription,
                inputTypeKanban: inputTypeKanban,
            });
            localStorage.setItem('data_InprogressBox', JSON.stringify(data_InprogressBox));
            this.drawInprogressReport();

    } else if (inputDescription && (inputTypeKanban === "Done")) {
                let data_DoneBox = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];
                data_DoneBox.push({
                    done_Description: inputDescription,
                    inputTypeKanban: inputTypeKanban,
                });
                localStorage.setItem('data_DoneBox', JSON.stringify(data_DoneBox));
                this.drawDoneReport();

    } else {
        alert("Vui lòng kiểm tra lại dữ liệu");
    };
};

function drawTodoReport() {
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    let import_ToDoTable = `<div class="title">To Do</div>`;
        if (data_ToDoBox != null) {
            data_ToDoBox.forEach((prop) => {
                import_ToDoTable += `
                <div class="kanban-box">
                <span>${prop.todo_Description}</span>
            </div>
            `
            });
        };
        document.getElementById('todo-box').innerHTML = import_ToDoTable;
};

function drawInprogressReport() {
    let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
    let import_InprogressTable = `<div class="title">In Progress</div>`;
            if (data_InprogressBox != null) {
                data_InprogressBox.forEach((prop) => {
                    import_InprogressTable += `
                    <div class="kanban-box">
                    <span>${prop.inprogress_Description}</span>
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
                    </div>
                    `
                    });
                };
                document.getElementById('done-box').innerHTML = import_DoneTable;

};


