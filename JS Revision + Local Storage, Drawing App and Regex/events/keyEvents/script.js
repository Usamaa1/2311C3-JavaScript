

let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let passowrd = document.getElementById('passowrd');


// fullName.addEventListener('keyup',()=>{
//     console.log(fullName.value);
// });


// fullName.addEventListener('keydown',()=>{
//     console.log(fullName.value);
// });


// fullName.addEventListener('keypress',()=>{
//     console.log(fullName.value);
// });




email.addEventListener('keyup',()=>{
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Eerror = document.getElementById('Eerror');
    let Evalid = document.getElementById('Evalid');

    if(email.value.match(emailRegEx))
    {
        console.log('valid')
        Evalid.innerText = "Your Email is Valid"
        Eerror.innerText = ''
    }
    else

{
    console.log('invalid')
    Eerror.innerText = 'Invalid Email'
    Evalid.innerText= '';

}




})


passowrd.addEventListener('keyup',()=>{
    let passRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let Perror = document.getElementById('Perror');
    let Pvalid = document.getElementById('Pvalid');

    if(passowrd.value.match(passRegEx))
    {
        console.log('valid')
        Pvalid.innerText = "Your Password is Valid"
        Perror.innerText = ''
    }
    else

{
    console.log('invalid')
    Perror.innerText = 'Kindly Enter One Upper Case One Lower Case One special characters and one digits'
    Pvalid.innerText= '';

}




})




let btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
let passowrd = document.getElementById('passowrd').value;
let cPassowrd = document.getElementById('cPassowrd').value;


if(passowrd != cPassowrd)
{
    let cPerror = document.getElementById('cPerror');
    cPerror.innerText = "Password does'nt match"
}

else{
    console.log('Your data saved Successfully')
}




})


