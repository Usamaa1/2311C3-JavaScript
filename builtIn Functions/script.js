
//********** Date Methods */

// let currentDate = new Date('03-25-2024');
// let currentDate = new Date();

// console.log(currentDate)

// console.log(currentDate.getDate());
// console.log(currentDate.getDay());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getMonth() + 1);


/****************  Number Methods */

// let num = 25;
// let num1 = "45";

// console.log(Number.isFinite(num))
// console.log(Number.isFinite(num1))

// let num = 25;
// let num1 = 2.5;
// console.log(Number.isInteger(num))

// let num = 2.36344334344334;

// console.log(num)
// console.log(num.toFixed(2))
// console.log(num.toPrecision(2))



/****************  Math Methods */



// console.log(Math.max(2,3,4,5,6, 73,43,21, 73, 67,56));

// console.log(Math.min(2,3,4,5,6,2,73,43,21, 73, 67,56));

// console.log(Math.sqrt(16));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(125))
// console.log(Math.pow(3,5))


// let num = -10;

// console.log(Math.abs(num))


// let rand = Math.random() * 10 + 1;

// console.log(rand)
// console.log(Math.round(rand))
// console.log(Math.floor(rand))
// console.log(Math.ceil(rand))
// console.log(Math.trunc(rand))
// console.log(Math.PI);


/**************  STRING METHODS */

// let str1 = "This is first String";
// let str2 = "THIS IS SECOND STRING";
// let num = 798;


// console.log(str1.length)
// console.log(str2.toLowerCase())
// console.log(str1.toUpperCase())
// console.log(num + 90)
// console.log(num.toString() + 90)
// console.log(str1.search('first'))
// console.log(str1.replace('is','it'))
// console.log(str1.replace(/is/g,'it'))





/**************  ARRAY METHODS */

// const a = 23;
// a= 34;

// const arr = [2,3,4,5,6];
// arr[3] = 4;
// arr.push(45)
// arr.push(345)
// arr.push(354)
// arr.push(65)

// arr.pop();
// arr.pop();

// arr.shift();
// arr.shift();

// arr.unshift(900)
// arr.unshift(500)




// delete arr[2];
// arr[2] = 45;



// console.log(arr.length)

// const cars = ['City','Alto','Mehran','Vitz','Ciaz','Alto','Mehran']


// let a = cars.indexOf('Mehran');

// // delete cars[a];
// console.log(a)

// delete cars[a]
// delete cars[cars.indexOf('Mehran')]

// let a = cars.lastIndexOf('Alto');
// console.log(a)


// const city = ['Karachi','Islamabad','Lahore','Peshawar']


// console.log(cars);
// console.log(cars.includes('Mehran'));


// const total = cars.concat(city,arr);

// console.log(total)



// let cities1 = [100,200,300,400];


// let cities2 = cities1;

// cities2[1] = 900;


// let a = "Ammar";

// let b = a;

// b = 3;

// console.log("value of a",a)
// console.log("value of b",b)
 


// console.log("cities 1",cities1)
// console.log("cities 2",cities2)


// let cities1 = [100,200,300,400];

// let cities2 = [...cities1];

// cities2[1] = 9000000;

// console.log("cities 1: ",cities1)
// console.log("cities 2: ",cities2)

// console.log(...cities1)

// const cars = ['Mehran','Ciaz','City', 'Ciaz','Mira'];

// console.log("Before Method",cars)
// cars.pop(); -----> for last deletion
// cars.push('Alto')------> for last insertion

// cars.shift(); ------> for begining deletion
// cars.unshift("BMW");------> for begining insertion

// cars[2] = 'Alto'
// delete cars[1];

// for(let i=0; i < 3; i++){

//     let userInput = prompt(`Enter Value ${i}`);
//     cars.push(userInput);
// }

// console.log("After Method",cars)

// console.log(cars.indexOf('Ciaz'));
// console.log(cars.lastIndexOf('Ciaz'));

// let carsIndex = cars.indexOf('Ciaz');

// delete cars[carsIndex];

// console.log("After Method",cars)

// console.log(cars.includes('fsdafds'));

// if(cars.includes('Mehran'))
//     console.log("Found!😁")
// else
//     console.log("Not Found!🤔");



// const nums1 = [1,2,3];
// const nums2 = [4,5,6];
// const nums3 = [7,8,9];

// const allNums = nums1.concat(nums2,nums3);

// console.log(allNums)



// const cities = ['Karachi','Islamabad','Multan'];

// let a = 20;

// let b = a;

// b = 40;

// console.log("a value is:",a)
// console.log("b value is:",b)




// const cities = ['Karachi','Islamabad','Multan'];

// const citiesCopy = cities;

// citiesCopy[2] = 'Lahore';

// console.log("Cities array:",cities)
// console.log("Copy of cities array:",citiesCopy)


// const cities = ['Karachi','Islamabad','Multan'];

// const citiesCopy = [...cities];

// citiesCopy[2] = 'Lahore';

// console.log("Cities array:",cities)
// console.log("Copy of cities array:",citiesCopy)

// console.log(...cities)



const persons = [
    ['Zahid', 56, 'Accountant'],
    ['Aslam', 45, 'Web Developer','Jetnix'],
    ['Haris',24, 'App Developer'],
    ['Jamshed', 67, 'Shop Owner']
]

console.log(persons[2][2])


console.table(persons)




for(let i = 0; i < persons.length; i++)
{
    for(let j = 0; j < persons[i].length; j++)
    {
        console.log(persons[i][j])
    }
}







