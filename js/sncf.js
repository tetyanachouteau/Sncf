
const productsDOM = document.getElementById("products");
const cartCountDOM = document.getElementById("cartCount");
const cartItemsDOM = document.getElementById("cartItems");
const totalPriceDOM = document.getElementById("totalPrice");

//Json de produits
// decription d'objet
// sous forme de clé valeur
const products = {
    "items": [{
        "id": "1",
        "title": "Paris - Tours",
        "price": 50.99,
        "image": "./images/product-1.jpeg"
    },
    {
        "id": "2",
        "title": "Paris - Bruxelles",
        "price": 120.99,
        "image": "./images/product-2.jpeg"
    },
    {
        "id": "3",
        "title": "Paris - Marseille",
        "price": 125.99,
        "image": "./images/product-3.jpeg"
    },
    {
        "id": "4",
        "title": "Paris - Metz",
        "price": 22.99,
        "image": "./images/product-4.jpeg"
    },
    {
        "id": "5",
        "title": "Paris - Dijon",
        "price": 30.99,
        "image": "./images/product-5.jpeg"
    },
    {
        "id": "6",
        "title": "Paris - Limoge",
        "price": 42.99,
        "image": "./images/product-6.jpeg"
    },
    {
        "id": "7",
        "title": "Paris - Brest",
        "price": 145.99,
        "image": "./images/product-7.jpeg"
    },
    {
        "id": "8",
        "title": "Paris - Rouen",
        "price": 33.99,
        "image": "./images/product-8.jpeg"
    },
    {
        "id": "9",
        "title": "Paris - Kyiv",
        "price": 453.00,
        "image": "./images/product-9.jpeg"
    }
    ]
};

// tableau qui stocke le nombre de produit.id dans le panier
let cart = [];

function addCart(id) {
    if (cart[id]) {
        cart[id]++;
    } else {
        cart[id] = 1;
    }

    computeCart();
}

function computeCart() {
    var count = 0;

    for (id in cart) {
        count += cart[id];
    }

    cartCountDOM.textContent = count;

    var ligne = "";
    var total = 0;

    // parcours du json
    // on récupé les indices du tableau items avec in
    // c'est comme un for (i=0,...)
    // productIndice est un numéro
    for (productIndice in products.items) {
        product = products.items[productIndice];
        // cart = panier
        if (cart[product.id]) {

            // pour avoir deux chiffre après la virgule je multiple par 100, arrondi et divise par 100
            var prixItem = Math.floor(product.price * cart[product.id] * 100) / 100;
            total += prixItem;

            // HTML en string pour l'ajouter après à la div avec css grid pour que ca s'affiche
            ligne += "<article>" +
                "<img src='" + product.image + "' alt='product' class='product-img-tiny'/>" +
                "<span>" + cart[product.id] + " " + product.title + "</span>" +
                "<span> à " + product.price + "€</span>" +
                "<span class='arrow'><i class='fas fa-arrow-circle-right'></i></span>" +
                "<span class='price'>" + prixItem + "€</span>" +
                "<span class='product-trash' onclick='deleteTodo(" + product.id + ")'>" +
                "  <i class='fas fa-trash-alt'></i>" +
                "</span>" +
                "</article>";
        }
    }

    cartItemsDOM.innerHTML = ligne;
    totalPriceDOM.innerText = Math.floor(total * 100) / 100;
}

function deleteTodo(id) {
    cart[id] = null;

    computeCart();
}

function showCart() {
    var cart = document.getElementById("cart");
    cart.style.visibility = "visible";
}

function hideCart() {
    var cart = document.getElementById("cart");
    cart.style.visibility = "hidden";
}

function loadArticle() {
    var result = "";
    for (productIndice in products.items) {
        product = products.items[productIndice];
        result += "<article class='product'>" +
            "<div class='img-container'>" +
            "<img src=" + product.image + " alt='product' class='product-img'/>" +
            "<button class='addCart' onclick='addCart(" + product.id + ")'>" +
            "<i class='fas fa-shopping-cart'></i>" +
            "AJOUTER AU PANIER" +
            "</button>" +
            "</div>" +
            "<h3><i class='fas fa-train'></i> " + product.title + "</h3>" +
            "<h4>" + product.price + "€</h4>" +
            "</article>";
    }

    // div est vide on la remplit avec le html
    productsDOM.innerHTML = result;
};

loadArticle();
function flechetop() {
    window.scrollTo(0, 0);
}
