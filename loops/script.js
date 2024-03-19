
// for(let a = 0; a <= 10; a++)
// {
//     console.log(a)
// }

// let cityNames = ['Karachi','Islamabad','Peshawar','Quetta','Gujranwala','Multan'];


// console.log(cityNames);
// // console.log(cityNames[5]);


// console.log(cityNames[0])
// console.log(cityNames[1])
// console.log(cityNames[2])
// console.log(cityNames[3])
// console.log(cityNames[4])
// console.log(cityNames[5])

// console.log("______________________________")

// for(let i = 0; i < 6; i++)
// {
//     console.log(cityNames[i])
   
// }

// for(let i = 0; i <= 10; i+=2)
// {
//     console.log(i)
// }


// for(let i = 10; i >= 0; i--)
// {
//     console.log(i)
// }


let cityNames = ['Karachi','Islamabad','Peshawar','Quetta','Gujranwala','Multan'];
let isFound = false;


for(i=0; i < cityNames.length; i++)
{
    if(cityNames[i] == 'jfksdjfkj')
    {
        document.write("Found");
        isFound = true;
    }
    // else
    // {
    //     document.write("Not Found <br>")
    // }
    // console.log(cityNames[i]);
}
if(!isFound)
{
    document.write("Not Found <br>")
}
