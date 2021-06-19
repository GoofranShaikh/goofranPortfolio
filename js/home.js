var nav=document.querySelector(".nav")

function hamburger(){
   nav.classList.remove("nav")
  
   document.querySelector(".mobileViewNav").style.display="flex"
    document.querySelector(".closeBtn").style.display="block"
   document.querySelector(".navList ").style.listStyle="none"
     document.querySelector(".hambuger").style.display="none"
    // document.querySelector(".middle").style.transform="rotate(60deg)"
  
}

function closeMobileNav(){
    console.log("inside console")
    nav.classList.add("nav")
    document.querySelector(".mobileViewNav").style.display="none"
    document.querySelector(".closeBtn ").style.display="none"
    document.querySelector(".hambuger").style.display="block"
}   

