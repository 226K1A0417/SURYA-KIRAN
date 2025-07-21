const students = [
  { name: "surya", age: 20 },
  { name: "bobby", age: 21 },
  { name: "anil", age: 22 },
  { name: "sudheer", age: 20 },
];

const displayContainer = document.createElement("div");
displayContainer.style.textAlign = "center";
document.body.appendChild(displayContainer);

const buttons = document.querySelectorAll("button");
const showBtn = buttons[0];
const sortNameBtn = buttons[1];
const sortAgeBtn = buttons[2];

function displayStudents(list) {
  displayContainer.innerHTML = "<h2>STUDENTS LIST</h2>";
  const ul = document.createElement("ul");
  list.forEach(student => {
    const li = document.createElement("li");
    li.textContent = `${student.name} - Age: ${student.age}`;
    ul.appendChild(li);
  });
  displayContainer.appendChild(ul);
}

showBtn.addEventListener("click", () => {
  displayStudents(students);
});

sortNameBtn.addEventListener("click", () => {
  const sortedByName = [...students].sort((a, b) => a.name.localeCompare(b.name));
  displayStudents(sortedByName);
});

sortAgeBtn.addEventListener("click", () => {
  const sortedByAge = [...students].sort((a, b) => a.age - b.age);
  displayStudents(sortedByAge);
});