function onClick() {
    const url = "https://localhost:44369/restaurant";

    var modal = document.getElementById("menuModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    loadMenuContent(url);
    span.onclick = function () {
        modal.style.display = "none";
    }
    console.log("Here self executed");
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function loadMenuContent(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let menuItems = document.querySelector(".menuModal-items");
            if (menuItems.children.length === 0) {
                Array.from(data).forEach(product => {
                    let menuArticle = document.createElement("article");
                    menuArticle.classList.add("menuModal-item");

                    let menuContent = document.createElement("div");
                    menuContent.classList.add("menuModal-item-content");

                    menuContent.innerHTML = `<img class="menuModal-item-image" src="./images/${product.image}" alt="none">`;
                    menuContent.innerHTML += `<p>${product.name}</p>`;
                    menuContent.innerHTML += `<p>$${parseFloat(product.price).toFixed(2)}</p>`
                    menuContent.innerHTML += `<button  class="menuButton" onclick="onMenuItemClick(event)">Add to cart</button>`
                    

                    menuArticle.appendChild(menuContent);
                    menuItems.appendChild(menuArticle);
                })
            }
        })
}
function onOpen(element) {
    element.classList.toggle("change");
    let isOpen = element.classList.contains("change");
    let menuCart = document.getElementById("menu-cart");

    if (isOpen) {
        menuCart.style.display = "block";
    }
    else {
        var totalPrice = document.getElementsByClassName("totalPrice")[0];
        if (totalPrice) {
            totalPrice.parentElement.remove();
        }
        menuCart.style.display = "none";
    }
}