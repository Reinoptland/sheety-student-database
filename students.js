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
  console.log("ADDDD!!");
});

// getStudents();
