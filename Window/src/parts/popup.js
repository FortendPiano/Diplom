//function popup() {
let callBack = document.querySelectorAll('.phone_link'),
    modal = document.querySelector('.popup'),
    closeBack = document.getElementsByClassName('popup_close')[0];
setTimeout(showModalWindow, 6000);

function showModalWindow() {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
}
for (let i = 0; i < callBack.length; i++) {
    callBack[i].addEventListener('click', showModalWindow);
}
closeBack.addEventListener('click', function () {
    modal.style.display = 'none';
    document.body.style.overflow = '';
});
//}
//module.exports = popup;