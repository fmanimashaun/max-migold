//Toggle search bar for mobile

//create variables
const nav = document.querySelector('#nav');
const navBar = document.querySelector('.nabvar');
const searchBar = document.querySelector('#search_bar');
const searchButton = document.querySelector('#search_btn');
const logoImg = document.querySelector('#logo');
const menuButton = document.querySelector('#menu_btn');
const closeButton = document.querySelector('#close_btn');
const bodyWidth = window.innerWidth;

//add event listener for search button
searchButton.addEventListener('click', function () {
    searchBar.style.display = 'block';
    closeButton.style.display = 'inline-block';
    menuButton.style.display = 'none';
    navBar.style.flexBasis = '100%';
    logoImg.style.flexBasis = '100%';
    nav.style.flexWrap = "wrap";
    logoImg.style.textAlign = "center";
});

//add event listener for close button
closeButton.addEventListener('click', function () {
    console.log('Menu clicked');
    searchBar.style.display = 'none';
    closeButton.style.display = 'none';
    menuButton.style.display = 'inline-block';
    navBar.style.flexBasis = '74.5%';
    logoImg.style.flexBasis = '23.5%';
    nav.style.flexWrap = "nowrap";
    logoImg.style.textAlign = "left";
});



//restore the menu when the window is resized

/*
window.addEventListener("resize", function() {
    if(bodyWidth < 1024){
        secondaryMenu.style.display = 'block';
    } else {
        secondaryMenu.style.display = 'none';
    }
});

*/

