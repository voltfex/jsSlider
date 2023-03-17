'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const btns = document.querySelectorAll('.btn'),
        photo = document.querySelectorAll('.photo');

    // console.log(btns);
    // console.log(photo);

    function switchBtn () {
        btns.forEach((item)).addEventListener('click', (event) => {
            console.log(event.target());
        });
    }

    switchBtn();
});