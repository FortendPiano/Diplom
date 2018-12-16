/*Должно вызываться модальное окно (класс popup_engineer)
При клике на крестик или подложку - исчезать*/

//function windowCall() {
'use strict';
    let btn = document.querySelector('.popup_engineer_btn'),
        modalWindow = document.querySelector('.popup_engineer'),
        close = document.getElementsByClassName('popup_close')[1];
        
    btn.addEventListener('click', function () {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';

    });
    close.addEventListener('click', function() {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    });
//}
module.exports = windowCall;
