function onMenuItemClick(e) {
    let currentButton = e.target;
    let parentElement = currentButton.parentElement;

    [productName, productIngredients, productPrice] = Array.from(parentElement.getElementsByTagName("p")).map((p) => {
        return p.innerHTML;
    });

    let cart = document.getElementsByClassName("menu-cart-container")[0];

    let cartItem = document.createElement("div");
    cartItem.classList.add("menu-cart-order");

    let cartContent = document.createElement("p");
    cartContent.innerHTML = `${productName} - <span class="price">${productPrice}</span></hr>`;
    cartItem.appendChild(cartContent);

    cart.appendChild(cartItem);
}
function onMenuCheckout() {
    var prices = Array.from(document.getElementsByClassName("price")).map(function (price) {
        var parsedPrice = parseFloat(price.innerHTML.replace('$', ''));
        return parsedPrice;
    });
    const totalPrice = prices.reduce((a, b) => a + b, 0);
    const totalPriceItem = document.createElement("p");
    totalPriceItem.innerHTML = `Total Price is: $<span class=totalPrice>${totalPrice}</span>`;

    var cart = document.getElementById("menu-cart");
    if (cart.getElementsByClassName("totalPrice").length <= 0) {

        cart.appendChild(totalPriceItem);
    }

}