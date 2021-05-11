async function getStudents() {
  const response = await axios.get(
    "https://api.sheety.co/4ca2f82ca37873cd0884999556d29c6c/signupForm/students"
  );

  for (const student of response.data.students) {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      console.log("DELETE THIS STUDENT", student.id);
      axios.delete(
        `https://api.sheety.co/4ca2f82ca37873cd0884999556d29c6c/signupForm/students/${student.id}`
      );

      listItem.remove();
    });
    button.innerText = "❌";
    listItem.innerText = student.name;
    listItem.appendChild(button);
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
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    console.log("DELETE THIS STUDENT", student.id);
  });
  button.innerText = "❌";
  listItem.innerText = newName;
  listItem.appendChild(button);
  const list = document.getElementById("studentList");
  list.appendChild(listItem);
});

getStudents();
