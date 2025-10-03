const argumentos = process.argv.slice(2);
//Obtener todos los productos
if (argumentos[0] === 'GET' && argumentos.length === 1) {
    async function fetchdata() {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchdata()
}   //Crear un nuevo producto
    else if (argumentos[0] === 'POST') {
    if (argumentos.length !== 4) {
        console.error("Error: El comando POST requiere exactamente 4 argumentos: POST <title> <price> <category>");
        process.exit(1);
    }
        async function postdata(title, price, category) {
            try {
                const response = await fetch('https://fakestoreapi.com/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: argumentos[1],
                        id: 21,
                        price: argumentos[2],
                        description: "This is a new product",
                        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        category: argumentos[3],
                    })
                })
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.error("Error posting data:", error);
            }
        }
        postdata()
    }
    //Consulta por ID
    else if (argumentos[0] === 'GET' && argumentos.length > 1) {
    async function getByID() {
        var idProducto = argumentos[1].slice(10);
        console.log(`Buscamos el item con id: ${idProducto}`);
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${idProducto}`)
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }     
    }
    getByID()
    //Borrar por ID
} else if (argumentos[0] === 'DELETE') {
    if (isNaN(argumentos[1])) {
        console.error("Error: El comando DELETE requiere un ID numérico.");
        process.exit(1);
    } else {
    try {
        var idProducto = argumentos[1];
        console.log(`Eliminamos el item con id: ${idProducto}`);
        const response = await fetch(`https://fakestoreapi.com/products/${idProducto}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error("Error deleting data:", error);
    }
}
;
}
