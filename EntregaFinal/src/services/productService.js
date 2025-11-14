const BASEURL = 'https://fakestoreapi.com/products';

export async function getAllProducts() {
    const response = await fetch(BASEURL);
    return response.json();
}

export async function getProductById(id) {
    const response = await fetch(`${BASEURL}/${id}`);
    return response.json();
}

export async function createProduct(title, price, category) {
            {
                const response = await fetch(BASEURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title,
                        price,
                        description: "Nuevo producto",
                        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        category
                    })
                })
                return response.json();
            }
        }

export async function deleteProduct(id) {
    const response = await fetch(`${BASEURL}/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}