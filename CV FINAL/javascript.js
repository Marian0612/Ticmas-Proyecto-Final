var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultar() {
    if(menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for (let x = 0; x <links.length;x++){
    links[x].onclick = function() {
        menu.style.display = "none";
        menu_visible = false;
    }
}
