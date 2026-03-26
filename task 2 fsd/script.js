let students = [

{id:1, name:"Arun", dept:"CSE", date:"2023-06-10"},
{id:2, name:"Bala", dept:"ECE", date:"2023-05-20"},
{id:3, name:"Charan", dept:"MECH", date:"2023-06-15"},
{id:4, name:"Deepak", dept:"CSE", date:"2023-04-11"},
{id:5, name:"Eshan", dept:"ECE", date:"2023-07-01"}

];

let filteredData = [...students];

function displayTable(data){

let table = document.querySelector("#studentTable tbody");
table.innerHTML="";

data.forEach(s=>{

let row = `
<tr>
<td>${s.id}</td>
<td>${s.name}</td>
<td>${s.dept}</td>
<td>${s.date}</td>
</tr>
`;

table.innerHTML += row;

});

updateDepartmentCount(data);

}

function sortByName(){

filteredData.sort((a,b)=>a.name.localeCompare(b.name));
displayTable(filteredData);

}

function sortByDate(){

filteredData.sort((a,b)=>new Date(a.date) - new Date(b.date));
displayTable(filteredData);

}

function filterDepartment(){

let dept = document.getElementById("departmentFilter").value;

if(dept==="All"){
filteredData=[...students];
}else{
filteredData = students.filter(s=>s.dept===dept);
}

displayTable(filteredData);

}

function updateDepartmentCount(data){

let counts={};

data.forEach(s=>{
counts[s.dept] = (counts[s.dept] || 0) + 1;
});

let list = document.getElementById("deptCount");
list.innerHTML="";

for(let dept in counts){

let li = document.createElement("li");
li.textContent = dept + " : " + counts[dept];
list.appendChild(li);

}

}

displayTable(filteredData);