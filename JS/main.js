let menu = document.getElementById('#foryou');
let content = document.getElementsByClassName('active') [0]; 
menu.addEventListener('click', function () {
    content.style.display = 'block'; 
});
