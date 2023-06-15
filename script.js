const menubar = document.querySelector('#menu-bar');
const mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

let readmore = document.getElementById('readmore');
readmore.addEventListener('click', function(){
    alert("The HealthCare Hospital");
});