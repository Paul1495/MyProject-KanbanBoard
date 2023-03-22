const switchLocation = (taskName,fromLocation,toLocation)=>{
    // Check if from Location contain item with taskName

    // If exists
    // Delete item in fromLocation
    // Create item in toLocation
    
    // Update data in localStorage

}

const deleteItemInLocation = (taskName,Location)=>{
    // Check if from Location contain item with taskName

    // Delete item in fromLocation
}

function recordDataInput() {
    let inputdescript = document.getElementById('input-description').value;
    let input_typekanban = document.getElementById('input-type').value;
    
if (inputdescript === '') {
    document.getElementById('inputDescription-error').innerHTML = 'Pls enter the ';
} else {
    document.getElementById('inputDescription-error').innerHTML = '';
}

if (input_typekanban === '') {
    document.getElementById('inputType-error').innerHTML = 'Pls enter the type of Kanban board';
} else {
    document.getElementById('inputType-error').innerHTML = '';
}

if (((inputdescript).length < 50) && (input_typekanban === "ToDo")) 
    {
        let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
        data_ToDoBox.push({
            descript: inputdescript,
            input_type: input_typekanban,
         });
        localStorage.setItem('data_ToDoBox', JSON.stringify(data_ToDoBox));
        this.drawTodo();
    } else if (((inputdescript).length < 50) && (input_typekanban === "Inprogress")) {
        let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
            data_InprogressBox.push({
                descript: inputdescript,
                input_type: input_typekanban,
            });
            localStorage.setItem('data_InprogressBox', JSON.stringify(data_InprogressBox));
            this.drawInprogress();
        
    } else if (((inputdescript).length < 50) && (input_typekanban === "Done")) {
        let data_DoneBox = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];
                data_DoneBox.push({
                    descript: inputdescript,
                    input_type: input_typekanban,
                });
                localStorage.setItem('data_DoneBox', JSON.stringify(data_DoneBox));
                this.drawDone();
    };
    resetInput();
};


// function drawInprogress(){
//     const parentElement = document.getElementById('inprogress-box');
//     const header = "In Progress";
//     const data_inprogress = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];

//     drawTask(parentElement,header,data_inprogress);
// };
// function drawDone(){
//     const parentElement = document.getElementById('done-box');
//     const header = "Done";
//     const data_done = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];

//     drawTask(parentElement,header,data_done);
// };

function drawTodo(){
    const parentElement = document.getElementById('todo-box');
    const header = "To do";
    const data_todo = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];

    drawTask(parentElement,header,data_todo);
};

function drawTask(parentElement,header,data){
    let content = `<div class="title">${header}</div>`;
            if (data != null) {
                data.forEach((prop, i) => {
                    content += `
                    <div id="${prop.descript}" class="kanban-box" onclick="edit(${i})" ondblclick="deleteData(${i})">
                    <span>${prop.descript}</span>
                   
                </div>
                `
                });
            };
    parentElement.innerHTML = content;
};

// Function edita Data - allow user get Data from inside localstorage and link it to input description
function edit(i){
    console.log(i)
    let data_todo = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    document.getElementById('input-description').value = data_todo[i].descript
    document.getElementById('input-type').value = data_todo[i].input_type
    document.getElementById('todo').value = i

    document.getElementById('save-information').style.display = "none"
    document.getElementById('change-information').style.display = "inline-block"
};


// Function change Data - allow user change data inside localstorage after change data input
function changeData() {
    let description = document.getElementById('input-description').value;
    let input_typekanban = document.getElementById('input-type').value;

    if (input_typekanban === "ToDo") {
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
    let index = document.getElementById('todo').value
    data_ToDoBox[index]={
        descript: description,
        input_type: input_typekanban
    }
    localStorage.setItem('data_ToDoBox', JSON.stringify(data_ToDoBox));
    drawTodo();
    }
    document.getElementById('save-information').style.display = "inline-block"
    document.getElementById('change-information').style.display = "none"
    resetInput();
};

function move() {
    let input_typekanban = document.getElementById('input-type').value;
    let id = document.getElementById('input-description').value;
    if (input_typekanban === "ToDo") {
        const node = document.getElementById(id);
        const list = document.getElementById("todo-box");
        list.insertBefore(node, null);
        } else if (input_typekanban === "Inprogress") {
            const node = document.getElementById(id);
            const list = document.getElementById("inprogress-box");
            list.insertBefore(node, null);
            } else if (input_typekanban === "Done") {
                const node = document.getElementById(id);
                const list = document.getElementById("done-box");
                list.insertBefore(node, null);
        };
        resetInput();
};

//     } else if(input_typekanban === "Inprogress") {
//         let data_InprogressBox = localStorage.getItem('data_InprogressBox') ? JSON.parse(localStorage.getItem('data_InprogressBox')) : [];
//             data_InprogressBox.push({
//                 descript: description,
//                 input_type: input_typekanban,
//             });
//             localStorage.setItem('data_InprogressBox', JSON.stringify(data_InprogressBox));
//             this.drawInprogress();

//         } else if (input_typekanban === "Done") {
//             let data_DoneBox = localStorage.getItem('data_DoneBox') ? JSON.parse(localStorage.getItem('data_DoneBox')) : [];
//                 data_DoneBox.push({
//                     descript: description,
//                     input_type: input_typekanban,
//                 });
//                 localStorage.setItem('data_DoneBox', JSON.stringify(data_DoneBox));
//                 this.drawDone();

//             } else {
//                 alert("Vui lòng kiểm tra lại dữ liệu");
//             };

//         document.getElementById('save-information').style.display = "inline-block"
//         document.getElementById('change-information').style.display = "none"
//         resetInput();
// };

// // Function delete data on local storage
function deleteData(i) {
    let data_ToDoBox = localStorage.getItem('data_ToDoBox') ? JSON.parse(localStorage.getItem('data_ToDoBox')) : [];
        if(confirm("Do you want to delete?")) {
    data_ToDoBox.splice(i, 1)
    localStorage.setItem('data_ToDoBox', JSON.stringify(data_ToDoBox));
    }
    drawTodo();
};

// // Function reset data
function resetInput() {
    document.getElementById('input-description').value =""
    document.getElementById('input-type').value = ""
};

