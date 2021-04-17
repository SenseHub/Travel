
document.getElementById("ham").addEventListener("click", function(){
navigation();
});

function navigation() {
    document.getElementById("Menu").classList.toggle("ham_menu");
    document.getElementById("ham").classList.toggle("ham_menu1");
    document.getElementById("back_bg").classList.toggle("back_ground");
}

document.getElementById("back_bg").addEventListener("click", function(){
    back();
});

function back() {
    document.getElementById("back_bg").classList.remove("back_ground");
    document.getElementById("ham").classList.remove("ham_menu1");
    document.getElementById("Menu").classList.toggle("ham_menu");
}






