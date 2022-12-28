function showMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "flex";
        burger.style.border = '2px solid black';
    } else {
        menu.style.display = "none";
        burger.style.border = 'none';
    }
}


