//Nav Script
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open');
    });
});

// Modal Script 
var modal = document.querySelector(".modal");
var modalImage = document.querySelector(".modal-content");

const projectImg = document.querySelectorAll('.project-img');
projectImg.forEach(item => {
    item.addEventListener('click', event=>{
        modal.style.display = "block";
        modalImage.src = event.target.src;
    });
});
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});