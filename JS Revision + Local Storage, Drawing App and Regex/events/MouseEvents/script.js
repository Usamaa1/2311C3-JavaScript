// CLICK EVENT EXAMPLE

// let btn = document.getElementById('btn');

// btn.addEventListener('click',()=>{
//     let box = document.getElementById('box');
//     box.style.background = 'tomato';
// })



// MOUSE ENTER, LEAVE, DOWN EVENTS

//let box = document.getElementById('box');

// box.addEventListener('mouseenter',()=>{
//     console.log('Mouse Enter event occured')
// })


// box.addEventListener('mousedown',()=>{
//     console.log('Mouse Down event occured')
// })


// box.addEventListener('mouseleave',()=>{
//     console.log('Mouse Leave event occured')
// })





//EXAMPLE


// let isMouseDown = false;

// let box = document.getElementById('box');

// box.addEventListener('mousedown',(e)=>{

//     console.log('Mouse Down event occured',e)
//     isMouseDown = true;

// })


//   box.addEventListener('mousemove',(e)=>{

//     if(isMouseDown)
//     {
      
//         console.log('Mouse Move event occured',e)
//     }


//     })






// box.addEventListener('mousedown',(e)=>{

//     console.log('Mouse Enter event occured',e)

// })


// box.addEventListener('mouseleave',(e)=>{

//     console.log('Mouse Enter event occured',e)

// })









let isMouseDown = false;

let draw = document.getElementById('draw');
let ctx = draw.getContext('2d')


draw.addEventListener('mousedown',(e)=>{

    console.log('Mouse Down event occured',e)
    isMouseDown = true;
    ctx.beginPath();

})


draw.addEventListener('mouseup',()=>{
    isMouseDown = false
})



draw.addEventListener('mousemove',(e)=>{
   
    if(isMouseDown)
    {
        ctx.lineTo(0, 0);
        ctx.moveTo(e.clientX,e.clientY);
        // ctx.lineTo(e.clientX,e.clientY)
        // ctx.moveTo(e.clientX,e.clientY);
        ctx.lineCap = 'round'
        ctx.stroke();
        ctx.strokeStyle = 'Blue';
        ctx.lineWidth = 3
        console.log('Mouse Move event occured',e)
    }


})

