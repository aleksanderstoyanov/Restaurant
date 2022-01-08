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
function onMenuItemClick(e) {
    let currentButton = e.target;
    let parentElement = currentButton.parentElement;

    [productName, productIngredients,productPrice] = Array.from(parentElement.getElementsByTagName("p")).map((p) => {
        return p.innerHTML;
    });

    let cart=document.getElementById("menu-cart");
    
    let cartItem=document.createElement("div");
    cartItem.classList.add("menu-cart-order");

    let cartContent=document.createElement("p");
    cartContent.innerHTML=`<p>${productName} - ${productPrice}</p></hr>`;
    cartItem.appendChild(cartContent);
    
    cart.appendChild(cartItem);
}