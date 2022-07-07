//Show or hide secondary menu

//create variables

const toggleMenu = document.querySelector('#menu-btn');
const secondaryMenu = document.querySelector('#secondary-nav');
const bodyWidth = window.innerWidth;

//add event listener

toggleMenu.addEventListener('click', function() {
    if(secondaryMenu.style.display === 'block'){
        secondaryMenu.style.display = 'none';
    } else {
        secondaryMenu.style.display = 'block';
    }
});



//restore the menu when the window is resized
window.addEventListener("resize", function() {
    if(bodyWidth < 1024){
        secondaryMenu.style.display = 'block';
    } else {
        secondaryMenu.style.display = 'none';
    }
});