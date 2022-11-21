
addRow = () =>{
    //vars
    let nameInp = document.getElementById("name").value;
    let dateInp = document.getElementById("date").value;
    let amountInp = document.getElementById("amount").value;
    let table = document.getElementsByTagName("table")[0];
    //table cells
    let newRow = table.insertRow(table.rows.length);
    let del = document.createElement('button');
    del.classList ="delete";
    del.innerHTML ="X"


    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = nameInp;
    cell2.innerHTML = dateInp;
    cell3.innerHTML = "$" + amountInp;  
    newRow.appendChild(del);

    table.addEventListener('click',delRow);
}
 

function delRow(e){
    const item = e.target; //to know if we clkicked the del we create a target and find the class name del if clicked do the rest:
    if (item.classList[0]==="delete")
    {
        const list = item.parentElement; // note is the parent of both del and check
        list.remove(); //removes the parent note which is the list
    }

}