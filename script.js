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

let slidesperview=3


const mediaQuery2 = window.matchMedia('(max-width: 900px)')
if (mediaQuery2.matches) {
  
    slidesperview = 2;
  }

const mediaQuery = window.matchMedia('(max-width: 466px)')
if (mediaQuery.matches) {
    console.log("mobile reached");
    slidesperview = 1;
  }



var swiper = new Swiper(".mySwiper", {
    slidesPerView: slidesperview,
    spaceBetween: 2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

//form validation

  const form=document.getElementById("form");
  const email=document.getElementById("email");
  const sender_name=document.getElementById("sender_name");
  const text=document.getElementById("text");
  const submit_btn=document.getElementById("send_btn");


  form.addEventListener("submit", (e)=>
  {
    e.preventDefault();
    console.log(sender_name.value)
    if(sender_name.value.length<3)
    {
        alert("Name must be at least 3 characters");
    }
    if(text.value.length<5)
    {
        alert("Message too short");
    }
  })