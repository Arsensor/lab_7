document.getElementById("get_button").onclick = get_product_by_word;
function get_product_by_word() {
    let data = document.getElementById("word_data_product").value;
    fetch('https://dummyjson.com/products/search?q=' + data)
        .then(res => res.json())
        .then(data => show_products(data.products))
}
function show_products(products) {
    document.getElementById("message").style.display = "none";
    let container = document.getElementById("output_product_3");
    container.innerHTML = '';  
    if (products.length > 0) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let card = document.createElement('div');
            card.className = "product_card";
            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" class="product_image">
                <h3 class="product_title">${product.title}</h3>
                <p class="product_info">Цена: $${product.price}</p>
                <p class="product_info">Категория: ${product.category}</p>
            `;
            container.appendChild(card);
        }
    } else {
        document.getElementById("message").style.display = "block";
    }
}
