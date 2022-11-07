fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((data) => {
    data.forEach((user) => {
      console.log("name: " + user.name);
      console.log("address: " + user.address.street);
      console.log("city: " + user.address.city);
      console.log("--------------------------");
    });
  })
  .catch((error) => console.error("Fertch error."))
  .finally((f) => console.log("Done!"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((result) => result.json())
  .then((data) => {
    data.forEach((todo) => {
      console.log("id: " + todo.id);
      console.log("title: " + todo.title);
      console.log("--------------------------");
    });
  })
  .catch((error) => console.error("Fertch error."))
  .finally((f) => console.log("Done!"));

// users.forEach((user) => {
//   console.log(user);
//   //   console.log("name: " + user.name);
//   //   console.log("address: " + user.address);
//   //   console.log("city: " + user.city);
// });
