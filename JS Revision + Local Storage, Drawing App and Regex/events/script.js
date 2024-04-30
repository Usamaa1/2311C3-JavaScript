// function sum(a,b)
// {

//     console.log(a + b);
// }

// console.log(sum(3,4) + 63)

// sum(5,76)

// Arrow Function
// let sum = (a,b) => a+b;

// console.log(sum(3,4))
// console.log(sum(3,9))

// let sum = (a,b) =>
// {
//     console.log(a + b)
// }

// sum(4,5)
// sum(4,7)

//Anonymous Function
// ()=>{

// }

// function()
// {

// }

// Events

// function getValues() {
//   let firstName = document.getElementById("firstName").value;
//   let lastName = document.getElementById("lastName").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let city = document.getElementById("city").value;
//   let state = document.getElementById("state").value;

//   console.log(firstName,lastName,email,password,city,state)

// }

let btn = document.getElementById("btn");
const userArray = [];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;




  









  const userObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    city: city,
    state: state,
  };


  userArray.push(userObj);




  let convertData = JSON.stringify(userArray);

  localStorage.setItem('userData',convertData)
  // sessionStorage.setItem('userData',convertData)


  
  console.log(userObj);
});
