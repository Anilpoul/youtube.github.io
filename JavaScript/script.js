var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}


// var userIcon = document.querySelector(".user-icon");
// userIcon.onclick = function(){
//     sidebar.classList.toggle("small-sidebar");
//     container.classList.toggle("large-container")
// }

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.toggle("active");
});

