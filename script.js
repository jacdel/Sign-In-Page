

let form = document.querySelector('form');
let table = document.querySelector('table')
let del = document.querySelector('table')
function addToList(event) {
    event.preventDefault();
    let name = document.getElementById('Fname').value;
    let last = document.getElementById('Last').value;
    let guests = document.getElementById('NUM').value;
    let phone = document.getElementById('Phone').value;
   
//    template for how data will populate on the table
    table.innerHTML += `<tr>
        <td>${name}</td>
        <td>${last}</td>
        <td>${guests}</td>
        <td>${phone}</td>
        <td><button class="deleteBtn">Delete</button></td>
      
</tr>`;

};

//delete Button function

function deleteRow(event) {
    if (!event.target.classList.contains('deleteBtn')) { //pass in the class
        return;
    }
    let btn = event.target;
    btn.closest('tr').remove();
}
form.addEventListener('submit',addToList);       
del.addEventListener('click',deleteRow)