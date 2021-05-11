async function getStudents() {
  const response = await axios.get(
    "https://api.sheety.co/4ca2f82ca37873cd0884999556d29c6c/signupForm/students"
  );

  for (const student of response.data.students) {
    const listItem = document.createElement("li");
    listItem.innerText = student.name;
    const list = document.getElementById("studentList");
    list.appendChild(listItem);
  }
}

const addStudentButton = document.getElementById("addStudentButton");

addStudentButton.addEventListener("click", () => {
  const nameInput = document.getElementById("studentName");
  const newName = nameInput.value;

  const body = {
    student: {
      name: newName,
    },
  };

  const response = axios.post(
    "https://api.sheety.co/4ca2f82ca37873cd0884999556d29c6c/signupForm/students",
    body
  );

  const listItem = document.createElement("li");
  listItem.innerText = newName;
  const list = document.getElementById("studentList");
  list.appendChild(listItem);
});

getStudents();
