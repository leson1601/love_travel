
// close and open sidebar
var close = document.querySelector(".sidebar-close-btn");
var sidebar = document.querySelector(".sidebar");
var header_btn = document.querySelector(".header__btn");


header_btn.onclick = function () {
    sidebar.style.right = "0";
    sidebar.style.display = "flex";
    close.style.right = "24px";
    close.style.display = "block";
}
close.onclick = function () {
    sidebar.style.right = "-410px";
    sidebar.style.display = "none";
    close.style.display = "none";
    close.style.right = "-365px";
}


// slider 
var sliderButtonList = document.querySelectorAll('.content-beaches__slider-btn-item');
var slideList = document.querySelectorAll('.content-beaches__slide');

for (let i = 0; i < sliderButtonList.length; i++) {
    sliderButtonList[i].onclick = function () {

        for (let j = 0; j < sliderButtonList.length; j++) {
            if (i == j) {
                setTimeout(function () {
                    sliderButtonList[j].classList.add('content-beaches__slider-btn-item--active');
                    slideList[j].classList.add('content-beaches__slide--active')
                }, 200);

            } else {
                setTimeout(function () {
                    //your code to be executed after 1 second
                    sliderButtonList[j].classList.remove('content-beaches__slider-btn-item--active')
                    slideList[j].classList.remove('content-beaches__slide--active')
                }, 200);
            }
        }
        console.log(slideList[i - 1])
    }
}
