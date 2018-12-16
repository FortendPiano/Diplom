//function seconds(){

//}
//module.exports = seconds;
/*Если пользователь на странице больше 60 секунд 
- должно появится модальное окно (popup).
 При нажатии на крестик или подложку окно исчезает.*/
let modalTime = document.querySelector('.popup'),
    closeTime = document.getElementsByClassName('popup_close')[0];
//setTimeout(showModalWindow, 6000);
function showModalWindow() {
    modalTime.style.display = "block";
    document.body.style.overflow = 'hidden';
}
/*closeTime.addEventListener('click', function () {
        modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    });*/