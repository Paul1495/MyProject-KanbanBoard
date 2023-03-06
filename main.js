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

function recordDataInput() {
    let inputDescription = document.getElementById('input-description').value;
    let inputTypeProduct = document.getElementById('inputTypeProduct').value;
    
if (inputDescription === '') {
    document.getElementById('inputDescription-error').innerHTML = 'Pls enter the description';
} else {
    document.getElementById('inputDescription-error').innerHTML = '';
}

if (inputTypeProduct === '') {
    document.getElementById('inputType-error').innerHTML = 'Pls enter the type of Kanban board';
} else {
    document.getElementById('inputType-error').innerHTML = '';
}


}

