function handleClick(index){
    fetch('new.json')
    .then(response => response.json())
    .then(data => {
        const product1 = data.Products[index];
console.log(product1)
        let cartItems = localStorage.getItem("cartItems")?
                        JSON.parse(localStorage.getItem("cartItems")) : [];
        cartItems.push(product1);
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    
})
}

fetch('new.json')
.then(response => response.json())
.then(data => {
    const productsContainer = document.getElementById('products-container');

    for (let i = 0; i < data.Products.length; i++) {
        const product = data.Products[i];
        // console.log(product)

        const card = document.createElement('div');
        card.classList.add('col-lg-4','col-md-4','col-sm-6','col-6', 'mb-4',);

        card.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img" alt="${product.name}">
        <div class="card-body">
            <h5 class="card-name">${product.name}</h5>
            <p class="card-rate">Price: ${product.rate}</p>
            <p class="card-rate1">${product.rate1}</p>
            <button class= "button" onclick="handleClick(${i})">${product.button}</button>
        </div>
        </div>
    `;
        productsContainer.appendChild(card);
    }
})
.catch(error => console.error('Error fetching JSON:', error));

