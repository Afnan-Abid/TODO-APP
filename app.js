function addTodo(){
    const data = document.getElementById('input').value;

    document.querySelector('#list').innerHTML +=`<li id="li_id">${data}
    <button onclick="deleteFunc()" id="deleteBtn">Delete</button>
    <button id="editBtn">Edit</button>
    <hr></li>`;
    document.getElementById('input').value='';

}

