var tl = gsap.timeline();
var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

menu.addEventListener("click", function(){
    tl.to("#full",{
        right: 0,
        duration: 0.8,
    
    })
    tl.from("#full h4",{
        x:150,
        duration: 0.8,
        stagger: 0.3,
        opacity: 0,
    })
    tl.from("#full i",{
        opacity: 0,
    
    })
    
})
close.addEventListener("click", function(){
    tl.to("#full",{
        right: "-30%",
        duration: 0.8,
    
    }) 
})


