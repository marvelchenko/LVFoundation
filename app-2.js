// const myDropdown = document.getElementById ("myDropdown");
// const content = document.getElementsByClassName("dropdown-content");

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// winddow.onclick = function(event){
//     if
//     (!event.target.matches('.dropbtn')){
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++){
//             var openDropdown = dropdowns[i];
//             if
//             (openDropdown.classList.contains('show')){
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

const mainMenu = document.querySelector ('.mainMenu');
const closeMenu = document.querySelector ('.closeMenu');
const openMenu = document.querySelector ('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

}
function close(){
    mainMenu.style.top = '-100%';
}
