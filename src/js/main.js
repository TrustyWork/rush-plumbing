document.querySelector(".fa.fa-bars").addEventListener("click",function(){
    document.querySelector(".small-menu").classList.toggle("active")
    document.querySelector(".fa.fa-bars").classList.toggle("active")
},false)

window.addEventListener("resize", function(){
    var scrolled = window.innerWidth
    if(scrolled>499){
        document.querySelector(".small-menu").classList.remove("active")
    }
},false)