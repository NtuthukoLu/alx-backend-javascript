//Defining student interface
interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string;
}

//Creeating two students 
var student1 : Student = {
    firstName : "Ian",
    lastName : "Fenyane",
    age : 27,
    location : "Nelspruit" 
};

var student2 : Student = {
    firstName : "Kamo",
    lastName : "Chauke",
    age : 25,
    location : "Rustenburg"
};

//Array that takes in two students variable
const studentList: Student[] = [student1, student2];

//rendering a table for each elements in the array and append row
const table = document.createElement('table');

studentList.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
//appending the table to the document body
document.body.appendChild(table);