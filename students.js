async function getStudents() {
  const response = await axios.get(
    "https://api.sheety.co/4ca2f82ca37873cd0884999556d29c6c/signupForm/students"
  );

  console.log(response.data.students);

  for (const student of response.data.students) {
    console.log(student);
    const listItem = document.createElement("li");
    listItem.innerText = student.name;
    console.log("RESULT SO FAR:", listItem);

    const list = document.getElementById("studentList");

    list.appendChild(listItem);
  }
}

getStudents();

// voorspellingen
// - namen
// - promise
