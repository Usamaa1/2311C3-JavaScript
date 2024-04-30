let person = ["Zahid", "Khan", "Accountant", 56];

// console.log(person);

let personObj = {
    firstName: "Zahid",
    lastName: "Khan",
    age: 56,
    jobTitle: "Accountant"
}

// console.log(personObj.firstName)

let personsObj = [
    {
        firstName: "Zahid",
        lastName: "Khan",
        age: 56,
        jobTitle: "Accountant"
    },
    {
        firstName: "Akmal",
        lastName: "Haris",
        age: 24,
        jobTitle: "Electrical Engineer"
    },
    {
        firstName: "Hanif",
        lastName: "Zubair",
        age: 67,
        jobTitle: "Mechanical Engineer"
    }
]

let tData = document.getElementById('tData')

console.log(tData)

for (let i = 0; i < personsObj.length; i++) {
    tData.innerHTML += `<tr>
<th scope="row">${i + 1}</th>
<td>${personsObj[i].firstName}</td>
<td>${personsObj[i].lastName}</td>
<td>${personsObj[i].jobTitle}</td>
<td>${personsObj[i].age}</td>
</tr>`
}



let box = document.getElementById('box');



box.style.backgroundColor= 'black'
box.style.width = '400px'
box.style.display = 'none'


// let c = document.getElementById('c');
let c = document.getElementsByClassName('c');

// let p = document.createElement('h1');
// p.innerText = 'Hello Text'

// c.appendChild(p)

// c.removeChild(p)

console.log(c)









// let hd1 = document.getElementById("heading")

// console.log(hd1)

// hd1.innerHTML = "This is text from javascript <a href='#'>Link</a>"
// hd1.innerText = "This is text from javascript <a href='#'>Link</a>"


// let hd2 = document.getElementsByClassName("heading")
// console.log(hd2)

// let hd3 = document.getElementsByTagName("h4");

// console.log(hd3)
















// console.log(personObj)


// console.log(personsObj)

// for(let i = 0; i < personsObj.length; i++)
// {
//     console.log(personsObj[i].firstName)
// }


// let i =0;

// while(i < personsObj.length)
// {
//     console.log(personsObj[i].lastName);
//     i++;
// }


// let isCardAvailable = prompt("")
// if(isCardAvailable == "yes"){
//     console.log("You can Enter in the University");
// }
// else if(isCardAvailable == "no")
// {
//     console.log("You can't enter in the University")
// }
// else
// {
//     console.log("Kindly Enter Correct Value")
// }


//  let age = prompt("");
// // let age = "18";

// if(Number(age) >= 18 && Number(age) < 100)
// {
//     console.log("You can drive the car")
// }
// else
// {
//     console.log("You can not allowed to drive car")
// }
