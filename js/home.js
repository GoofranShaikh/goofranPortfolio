var nav=document.querySelector(".nav")

function hamburger(){
   nav.classList.remove("nav")
   nav.classList.add("mobileViewNav")
   var closetn= document.querySelector(".closeBtn").style.display="block"
   document.querySelector(".navList ").style.listStyle="none"
}

function closeMobileNav(){
    console.log("inside console")
    nav.classList.add("nav")
    nav.classList.remove("mobileViewNav")
    document.querySelector(".closeBtn ").style.display="none"
}   