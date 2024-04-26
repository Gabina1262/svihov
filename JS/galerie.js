let scrollContainer = document.querySelector(".galerie");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

prevBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 900;
});



