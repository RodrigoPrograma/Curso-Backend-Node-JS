¡Perfecto! Entonces respetando tu **estructura actual de `index.js`**, aquí te dejo un **README.md listo para colocar en tu carpeta de proyecto**, explicado y adaptado a tu código tal cual lo tenés:

````markdown
# 📦 EntregaFinal - CLI de Productos

Este proyecto es una **aplicación de línea de comandos (CLI)** en Node.js que permite interactuar con la [FakeStore API](https://fakestoreapi.com/).  
Permite **obtener, crear y eliminar productos** directamente desde la terminal usando tu `index.js`.

---

## ⚡ Requisitos

- Node.js **v18 o superior** (usa `fetch` global)  
- Conexión a Internet  

---

## 📥 Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd EntregaFinal
````

2. Instalar dependencias si hay alguna (por ahora `fetch` es global):

```bash
npm install
```

---

## 🛠️ Uso

Todos los comandos se ejecutan desde la terminal con:

```bash
node index.js <COMANDO> [ARGUMENTOS]
```

### Comandos disponibles

| Comando                             | Descripción                           | Ejemplo                               |
| ----------------------------------- | ------------------------------------- | ------------------------------------- |
| `GET`                               | Obtener todos los productos           | `node index.js GET`                   |
| `GET <id>`                          | Obtener un producto por ID            | `node index.js GET 3`                 |
| `GET products/<id>`                 | Otra forma de obtener producto por ID | `node index.js GET products/3`        |
| `POST "<title>" <price> <category>` | Crear un nuevo producto               | `node index.js POST "Camisa" 99 ropa` |
| `DELETE <id>`                       | Eliminar un producto por ID           | `node index.js DELETE 5`              |

---

## ✅ Ejemplos de salida

**Obtener todos los productos:**

```text
[
  { id: 1, title: 'Camiseta', price: 19.99, ... },
  { id: 2, title: 'Zapatos', price: 49.99, ... }
]
```

**Crear un producto:**

```text
Producto creado: { id: 21, title: 'Camisa', price: 99, category: 'ropa', ... }
```

**Eliminar un producto:**

```text
Eliminamos el item con id: 21
{ id: 21, title: 'Camisa', price: 99, category: 'ropa', ... }
```

---

## ⚠️ Validaciones

* `POST` requiere exactamente **tres argumentos**: título, precio y categoría.
* `DELETE` requiere un **ID numérico**.
* `GET` puede recibir un ID numérico o la ruta `products/<id>`.
* Si no ingresás ningún comando, el programa mostrará un error:

```text
Debes ingresar un comando. Ejemplo: GET | POST | DELETE
```

---

## 💡 Notas

* Todo el código está actualmente **en `index.js`**, siguiendo tu estructura actual.
* Se recomienda Node ≥18 para usar `fetch` global.
* Ideal para practicar **Node.js, async/await y CLI**.

```

---

Si querés, puedo hacer una **versión aún más visual**, con **emojis y colores por sección**, para que quede muy atractiva en GitHub y destaque cada comando.  

¿Querés que haga esa versión?
```
