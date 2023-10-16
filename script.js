console.log("hello world");

let hamburger=document.querySelector('.hamburger');
let navbar=document.querySelector('.navbar');

// console.log(navbar)

hamburger.addEventListener('click', ()=>
{
    console.log(navbar.style.display);
    if(navbar.style.display==="none" || navbar.style.display==="")
    {
        navbar.style.display="block";
        navbar.classList.add("slidetop");
    }
    else
    {
        navbar.style.display="none";
    }
   
});