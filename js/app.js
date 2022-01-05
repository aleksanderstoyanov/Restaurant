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

    [productName, productPrice] = Array.from(parentElement.getElementsByTagName("p")).map((p) => {
        return p.innerHTML;
    });

    const product = {};
    product["productName"] = productName;
    product["productPrice"] = productPrice;
    
    localStorage.setItem("product",JSON.stringify(product));
}