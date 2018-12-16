//function popup() {
let callBack = document.querySelectorAll('.phone_link'),
    modal = document.querySelector('.popup'),
    closeBack = document.getElementsByClassName('popup_close')[0];
for (let i = 0; i < callBack.length; i++) {
    callBack[1].addEventListener('click', function () {
        modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}
closeBack.addEventListener('click', function () {
    modalWindow.style.display = 'none';
    document.body.style.overflow = '';
});
//}
//module.exports = popup;