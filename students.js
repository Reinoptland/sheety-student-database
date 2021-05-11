async function getStudents() {
  const response = await axios.get(
    "https://api.sheety.co/4ca2f82ca37873cd0884999556d29c6c/signupForm/students"
  );

  console.log(response.data.students);
}

getStudents();

// voorspellingen
// - namen
// - promise
