///function tabsWin(){
/*Должны быть реализованы табы 
Так же идет переключение активного таба и его стиля.
(класс active)*/

let wrapper = document.querySelector('.glazing_slider'),
    tabs = document.querySelectorAll('.glazing_block'),
    tabContent = document.querySelectorAll('.row .no-padding');

    function showTabContent(b) {
        //if(tabContent[b].classList.contains('active')) {
            tabContent[b].classList.add('active');
            //tabContent[b].style.display = 'block';
        //}
    }

    wrapper.addEventListener('click', function (event) {
        let target = event.target;
        
        if (target && target.classList.contains('glazing_block')) {
            for (let i = 0; i < tabs.length; i++) {
                tabContent[i].classList.add('active');
                if (target == tabs[i]) {
                    
                    //hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    

//}
console.log(tabContent);
//module.exports = tabsWin;