document.getElementById("get_button").onclick = get_product_by_id;
function get_product_by_id() {
    let data = document.getElementById("id_data_product").value;
    if (isNaN(data) || data < 1 || data > 30) {
        alert("Введите корректный номер продукта!");
        return;
    } else {
        fetch('https://dummyjson.com/products/' + data)
        .then(res => res.json())
        .then(data => show_product(data))
    }
}
function show_product(product) {
    let container = document.getElementById("output_product_2");
    container.innerHTML = '';
    let card = document.createElement('div');
    card.className = "product_card";
    card.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" class="product-image" style="max-width: 200px;">
    <h3 class="product_title">${product.title}</h3>
    <p class="product_info">Цена: $${product.price}</p>
    <p class="product_info">Категория: ${product.category}</p>
    <p class="product_description">${product.description}</p>`;
    container.appendChild(card);
}