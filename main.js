const deleteItemInLocation = (taskName,Location)=>{
    // Check if from Location contain item with taskName

    // Delete item in fromLocation
}


// Function edit/change Data - allow user get Data from inside localstorage and link it to input description
function edit(i){
//     let data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];
//     document.getElementById('taskname-input').value = data_Box[i].name,
//     document.getElementById('fromLocation-input').value = data_Box[i].box,
//     document.getElementById('todo').value = i
};

// function changeData() {
//     let description = document.getElementById('taskname-input').value;
//     let input_changedata = document.getElementById('toLocation-input').value;
//     let data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];

//     if (input_changedata === "ToDo") {
//     let index = document.getElementById('todo').value
//     data_Box[index]={
//         descript: description,
//         input_type: input_changedata
//     };
//     localStorage.setItem('data_Box', JSON.stringify(data_Box));
//     // drawTodo();
//     } else if (input_changedata === "Inprogress") {
//         let index = document.getElementById('todo').value
//         data_Box[index]={
//             descript: description,
//             input_type: input_changedata
//         };
//         data_Box.forEach((item, i) => {
//             item.id = i + 1;
//          });
//         localStorage.setItem('data_Box', JSON.stringify(data_Box));
//         // drawTodo();
//     } else if (input_changedata === "Done") {
//         let index = document.getElementById('todo').value
//         data_Box[index]={
//             descript: description,
//             input_type: input_changedata
//         };
//         data_Box.forEach((item, i) => {
//             item.id = i + 1;
//          });
//         localStorage.setItem('data_Box', JSON.stringify(data_Box));
//         // drawTodo();
//     };
// };

function move() {
    let input_typekanban = document.getElementById('toLocation-input').value;
    let description = document.getElementById('taskname-input').value;

    if (input_typekanban === "ToDo") { 
        const node = document.getElementById(description);
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
};

// Function delete data on local storage
function deleteData(i) {
    // let data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];
    //     if(confirm("Do you want to delete?")) {
    //         data_Box.splice(i, 1)
    // localStorage.setItem('data_Box', JSON.stringify(data_Box));
    // }
    // drawTodo();
};

// localStorage data. Item name data. Item is collection of task
// Each task contains
// id: number - start from 1
// name: string
// box: todo/inprogress/done
const createTask = () => {
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
        let data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];
        data_Box.push({
            descript: inputdescript,
            input_type: input_typekanban,
         });
         data_Box.forEach((item, i) => {
            item.id = i + 1;
         });
        localStorage.setItem('data_Box', JSON.stringify(data_Box));
        this.drawTodo();
    } else {
        alert("Vui lòng kiểm tra dữ liệu");
    };
};

// function drawTodo() {
//     const parentElement = document.getElementById('todo-box');
//     const header = "To do";
//     const data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];

//     drawTask(parentElement,header,data_Box);
// };

// function drawInprogress() {
//     const parentElement = document.getElementById('inprogress-box');
//     const header = "In progress";
//     const data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];

//     drawTask(parentElement,header,data_Box);
// };

// function drawDone() {
//     const parentElement = document.getElementById('done-box');
//     const header = "Done";
//     const data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];

//     drawTask(parentElement,header,data_Box);
// };

// function drawTask(parentElement,header,data){
//     let content = `<div class="title">${header}</div>`;
//             if (data != null) {
//                 data.forEach((prop, i) => {
//                     content += `
//                     <div id="${prop.descript}" class="kanban-box" onclick="edit(${i})" ondblclick="deleteData(${i})">
//                     <span>${prop.descript}</span> 
//                 </div>
//                 `
//                 });
//             };
//     parentElement.innerHTML = content;
// };

const drawTask = (parent,task) =>{
    const taskDiv = document.createElement("div");
    taskDiv.className = "kanban-box";
    taskDiv.onclick = edit(task.id);
    taskDiv.ondblclick = deleteData(task.id);
    taskDiv.innerHTML = task.name;
    taskDiv.id = task.id;
    parent.appendChild(taskDiv);
}

const onload = () => {
    const data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];
    // const todoBox = document.getElementById('todo-box');
    // const todoBox = document.getElementById('todo-box');
    // const todoBox = document.getElementById('todo-box');
    // drawTask(todoBox,newTask);

} 
// Draw all item 
// Todo - InProgres- Done

// const drawTask =()=>{
//     //load data from localStorage
//     //drawTodoBox
//     //draw inprogressBox
//     //draw done box
// }

// Add Task

const addTask = (taskName) =>{
    // get localstorage data
    const data_Box = localStorage.getItem('data_Box') ? JSON.parse(localStorage.getItem('data_Box')) : [];
    // get max Id 
    let maxId = 1;
    if(data_Box.length > 0){
        // create newest id = maxId + 1
        maxId = Math.max(...data_Box.map(o => o.id)) + 1
    }

    // create a new data item base on name
    const newTask = {
        // id = newest id
        id :maxId,
        name: taskName,
        // default box = todo 
        box: "ToDo"
    }

    // draw task in todo box
    const todoBox = document.getElementById('todo-box');
    drawTask(todoBox,newTask);

    // update localStorage
    if ((taskName).length < 50 && (taskName != "")) 
    {
        data_Box.push({
            name: newTask.name,
            box: newTask.box,
            id: newTask.id
         });
        localStorage.setItem('data_Box', JSON.stringify(data_Box));

    } else {
        alert("Vui lòng kiểm tra dữ liệu");
    };
};



const btnSwitchClicked = (event)=>{
    console.log(event);
    const taskName = document.getElementById("taskname-input").value;
    const fromLocation = document.getElementById("fromLocation-input").value;
    const toLocation = document.getElementById("toLocation-input").value;
    switchLocation(taskName,fromLocation,toLocation);
};
// Switch task location 
const switchLocation = (taskName,fromLocation,toLocation)=>{
    // Check if from Location contain item with taskName
    // base on location name - get box id 
    let data = document.getElementById("todo-box").childNodes;
    if (taskName == null ) return;
    data.forEach((item) => {
        if (taskName === item.id) {
           console 
        } else {
            console.log("not oke")
        }
        });
    
        

        // declare childNode variable
        // Get childnods of frome
        // Loop childNodes
        // if childNodes has text == taskName 
        // set that childnode - use break to get out of loop
    // If exists
        // if childNode is set then is exited continue next step else return

    // Switch item in toLocation
        // Get toLocation 
        // insert before fisrt child 

    // Update data in localStorage

    // console.log(taskName);
    // console.log(fromLocation);
    // console.log(toLocation);
};

const savedButtonClicked = () =>{
    console.log("savedButtonClicked");
    const taskName = document.getElementById("input-description").value;
    addTask(taskName);
}

const draw = () => {

}

