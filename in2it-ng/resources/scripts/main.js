//Toggle search bar for mobile

//create variables
const nav = document.querySelector('#nav');
const navBar = document.querySelector('.nabvar');
const searchBar = document.querySelector('#search_bar');
const searchButton = document.querySelector('#search_btn');
const logoImg = document.querySelector('#logo');
const menuButton = document.querySelector('#menu_btn');
const closeButton = document.querySelector('#close_btn');
const secondaryMenu = document.querySelector('#secondary_nav');
const sourcesList = document.querySelector('picture.slider_img');
const rightArrow = document.querySelector('#right_arrow');
const leftArrow = document.querySelector('#left_arrow');
let count = 0;
const bodyWidth = window.innerWidth;


//sourcesList.children[0].attributes.srcset.value = 'images/slider/slider_img_1.jpg';
//sourcesList.children[1].attributes.srcset.value = 'images/slider/slider_img_1.jpg';
//sourcesList.children[2].attributes.srcset.value = 'images/slider/slider_img_1.jpg';
//sourcesList.children[3].attributes.srcset.value = 'images/slider/slider_img_1.jpg';
//sourcesList.children[3].attributes.src.value = 'images/slider/slider_img_1.jpg';

//add event listener for search button
searchButton.addEventListener('click', function () {
    searchBar.style.display = 'block';
    closeButton.style.display = 'inline-block';
    menuButton.style.display = 'none';
    navBar.style.flexBasis = '100%';
    logoImg.style.flexBasis = '100%';
    nav.style.flexWrap = "wrap";
    logoImg.style.textAlign = "center";
    if(secondaryMenu.style.display === 'block'){
        secondaryMenu.style.display = 'none';
    }
});

//add event listener for close button
closeButton.addEventListener('click', function () {
    searchBar.style.display = 'none';
    closeButton.style.display = 'none';
    menuButton.style.display = 'inline-block';
    navBar.style.flexBasis = '74.5%';
    logoImg.style.flexBasis = '23.5%';
    nav.style.flexWrap = "nowrap";
    logoImg.style.textAlign = "left";
    if(secondaryMenu.style.display === 'block'){
        secondaryMenu.style.display = 'none';
    }
});

//add event listener for menu button 
menuButton.addEventListener('click', function () {
    secondaryMenu.style.display = 'block';
    menuButton.style.display = 'none';
    closeButton.style.display = 'inline-block';
});

//add event listener for slider arrows

//right ar
rightArrow.addEventListener('click', function () {
    count++;
    if(count === 4){
        count = 0;
        console.log(count);
        console.log("count reset");
    }else {
        console.log(count);
    }
});

//left arrow
leftArrow.addEventListener('click', function () {
    count--;
    if(count === -1){
        count = 3;
        console.log(count);
        console.log("count reset");
    }else {
        console.log(count);
    }
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
