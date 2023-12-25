var slidePosition=1;
const sidebar = document.querySelector('.sidebar');
const sidebarIcon = document.querySelector('.sidebar-icon');

sidebarIcon.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});
SlideShow(slidePosition);

function plusSlides(n){
    SlideShow(slidePosition +=n);
}

function currentslide(n){
    SlideShow(slidePosition = n);
}

function SlideShow(n){
    var i;
    var slides = document.getElementsByClassName("containers");
    var circles = document.getElementsByClassName("dots");
    if(n > slides.length){
        slideposition=1;
    }
    if(n < slides.length){
        slidePosition = slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0;i<circles.length;i++){
        circles[i].className = circles[i].className.replace("enable","");
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += "enable";
}

