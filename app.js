const products = document.querySelector(".user-data")


fetch("product.json")
    .then(res => res.json())
    // .then(data => console.log(data[1].featured_image.url))
    .then(data => render(data))
    
    function render(data){
        data.map(elem => {
            const li = document.createElement("li");
            li.textContent = elem.featured_image.url
            products.append(li)
        })
    }
