///////////////////bar side movements with pages design //////////

(() => {



    var DOMstring = {
        sideBar: document.querySelector('.side-bar'),
        tabIcon: document.getElementById('side-bar-icon'),
        header: document.querySelector('.body-wrapper'),
        closeIcon: document.getElementById('close-side-bar'),
        body: document.querySelector('body'),
        secondHand: document.querySelector('.second-hand'),
        minHand: document.querySelector('.min-hand'),
        hourHand: document.querySelector('.hour-hand'),
    }



    DOMstring.tabIcon.addEventListener('click', () => {
        console.log('cccc')
    })
    function movingIn() {
        DOMstring.sideBar.classList.toggle('side-bar-overlay');
        DOMstring.header.classList.toggle('body-overlay');
        DOMstring.closeIcon.classList.toggle('close-icon');
        DOMstring.tabIcon.classList.toggle('side-menu-icon');
        DOMstring.body.classList.toggle('body-overflow');
    }


    DOMstring.tabIcon.addEventListener('click', movingIn);
    DOMstring.closeIcon.addEventListener('click', movingIn);





    /////////////////////clock functions/////////////////

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondDegree = ((seconds / 60) * 360) + 90;
        if (secondDegree >= 444) {
            DOMstring.secondHand.style.transition = 'none';
        };
        DOMstring.secondHand.style.transform = `rotate(${secondDegree}deg)`;

        const mins = now.getMinutes();
        const minDegree = ((mins / 60) * 360) + 90;
        DOMstring.minHand.style.transform = `rotate(${minDegree}deg)`;

        const hours = now.getHours();
        const hourDegree = ((hours / 12) * 360) + 90;
        DOMstring.hourHand.style.transform = `rotate(${hourDegree}deg)`;
    }

    setInterval(setDate, 1000); // this will run the function setDate every seconds
    module.exports = { movingIn }
})();