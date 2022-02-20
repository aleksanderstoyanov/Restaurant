function onClick() {
    var modal = document.getElementById("menuModal");
    var btn = document.getElementById("menuLink");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function onOpen(element) {
    element.classList.toggle("change");
    let isOpen=element.classList.contains("change");
    let menuCart =document.getElementById("menu-cart");

    if (isOpen) {
       menuCart.style.display="block";
    }
    else{
        var totalPrice=document.getElementsByClassName("totalPrice")[0];
        if (totalPrice) {
            totalPrice.parentElement.remove();
        }
        menuCart.style.display="none";
    }
}