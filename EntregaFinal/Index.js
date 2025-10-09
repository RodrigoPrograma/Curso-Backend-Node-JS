const argumentos = process.argv.slice(2);

if (argumentos.length === 0) {
    mostrarError("Debes ingresar un comando. Ejemplo: GET | POST | DELETE");
}
//Obtener todos los productos
if (argumentos[0] === 'GET' && argumentos.length === 1) {
    async function fetchdata() {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("Error al obtener los productos:", error);
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
                        title,
                        price,
                        description: "Nuevo producto",
                        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                        category
                    })
                })
                const data = await response.json()
                console.log("Producto creado:", data)
            } catch (error) {
                console.error("Error al crear el producto:", error);
            }
        }
        postdata(argumentos[1], argumentos[2], argumentos[3])
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
