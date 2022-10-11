const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 40 },
    { nombre: "Jersey", precio: 45 },
    { nombre: "Abrigo", precio: 70 },
    { nombre: "Zapatos", precio: 65 },
];
let carrito = []

let seleccion = prompt("Encantado de saludarte, ¿Quieres comprar algún producto?. Si/No")

while(seleccion != "Si" && seleccion != "No"){
    alert("Por favor ingresa Si/No")
    seleccion = prompt("¿Quieres comprar algún producto?. Si/No")
}

if(seleccion == "Si"){
    alert("Estos son nuestros productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "No"){
    alert("Gracias por su visita, hasta pronto.")
}

while(seleccion != "No"){
    let producto = prompt("Añade un producto a tu cesta")
    let precio = 0

    if(producto == "Camiseta" || producto == "Pantalón" || producto == "Jersey" || producto == "Abrigo" || producto == "Zapatos"){
        switch (producto){
            case "Camiseta":
                precio = 20;
                break;
            case "Pantalón":
                precio = 40;
                break;
            case "Jersey":
                precio = 45;
                break;
            case "Abrigo":
                precio = 70;
                break;
            case "Zapatos":
                precio = 65;
                break;
        }
    let unidades = parseInt(prompt("Indique una cantidad"))
    
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else{
        alert("Producto erróneo")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion === "No"){
        alert("Gracias por su compra, vuelva pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por su compra ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`);