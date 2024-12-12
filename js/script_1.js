function get_products() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => show_products(data.products));
}
function show_products(products) {
    let container = document.getElementById("output_products_1");
    container.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let card = document.createElement('div');
        card.className = "product_card";
        card.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" class="product_image">
            <h3 class="product_title">${product.title}</h3>
            <p class="product_info">Цена: $${product.price}</p>
            <p class="product_info">Категория: ${product.category}</p>`;
        container.appendChild(card);
    }
}
get_products();
