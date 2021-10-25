(() => {
    let sideIcon = document.getElementById('array-open-icon');
    let sideBar = document.getElementById('arr-sid-bar');
    let methodConte = document.getElementById('methods');

    let a = 0;

    sideIcon.addEventListener('click', () => {
        sideBar.classList.toggle('arr-side-nonplay')
        methodConte.classList.toggle('arr-side-nonplay')
        console.log(a);
    })
})();