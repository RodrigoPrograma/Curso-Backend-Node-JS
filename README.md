# 📦 API REST – Gestión de Productos (Entrega Final)

Este proyecto corresponde a la **entrega final del curso Backend con Node.js**.
Se trata de una **API REST desarrollada con Express**, que implementa autenticación mediante **JWT**, manejo centralizado de errores y **rutas protegidas**.

La API está desplegada en **Vercel** utilizando **Node Runtime (modo legacy)** y fue probada tanto en entorno local como en producción.

---

## 🎯 Objetivo del proyecto

El objetivo principal de esta API es:

* Implementar un servidor backend con **Node.js y Express**
* Gestionar autenticación de usuarios mediante **JSON Web Tokens (JWT)**
* Proteger rutas privadas
* Manejar errores de forma controlada y centralizada
* Simular un flujo real de **login y consumo de datos**
* Cumplir con la estructura y los conceptos vistos durante el curso

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* JSON Web Tokens (JWT)
* dotenv
* CORS
* Firebase Firestore (almacenamiento de datos)
* Vercel (deploy)

---

## 📁 Estructura del proyecto

```
EntregaFinal/
│
├── index.js
├── vercel.json
├── package.json
├── .env
│
└── src/
    ├── config/
    ├── controllers/
    ├── data/
    ├── middleware/
    ├── models/
    ├── routes/
    │   ├── auth.routes.js
    │   └── products.routes.js
    └── services/
```

---

## 🔐 Autenticación

La API utiliza **JSON Web Tokens (JWT)** para autenticar usuarios y proteger rutas privadas.

### Flujo de autenticación

1. El usuario se autentica mediante `POST /api/auth/login`
2. Si las credenciales son correctas, se genera un **token JWT**
3. El token debe enviarse en el header `Authorization` para acceder a rutas protegidas

---

## 👤 Usuarios de prueba

Para simplificar la entrega, **no se implementó registro de usuarios**.
Existen usuarios previamente creados para realizar pruebas de autenticación.

### Usuario estándar (solo métodos GET)

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Administrador (todos los métodos habilitados)

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

---

## 🔑 Login

### `POST /api/auth/login`

Permite autenticar un usuario y obtener un token JWT.

**Body (JSON):**

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

**Respuesta exitosa:**

```json
{
  "token": "jwt_generado"
}
```

---

## 📍 Endpoints – Productos

**Base URL:**

```
https://talento-tech-entregafinal.vercel.app/api/products
```

### 📥 Obtener todos los productos

**GET** `/api/products`

Devuelve el listado completo de productos.
🔒 Requiere token JWT.

---

### 🔍 Obtener un producto por ID

**GET** `/api/products/:id`

Devuelve un producto específico según su ID.
🔒 Requiere token JWT.

Ejemplo:

```
/api/products/123
```

---

### ➕ Crear un nuevo producto

**POST** `/api/products`

Crea un nuevo producto.
🔒 Requiere token JWT.

**Body (JSON):**

```json
{
  "name": "Producto ejemplo",
  "price": 150,
  "category": "general"
}
```

---

### ✏️ Actualizar un producto

**PUT** `/api/products/:id`

Actualiza un producto existente según su ID.
🔒 Requiere token JWT.

Ejemplo:

```
/api/products/123
```

---

### 🗑️ Eliminar un producto

**DELETE** `/api/products/:id`

Elimina un producto existente.
🔒 Requiere token JWT.

Ejemplo:

```
/api/products/123
```

---

## ❌ Manejo de errores

La API implementa **manejo de errores controlado**, devolviendo respuestas claras y consistentes.

### Casos manejados

* Datos incompletos en el login
* Token no enviado
* Token inválido o expirado
* Ruta inexistente
* Errores internos del servidor
* Falta de datos en productos

**Ejemplo de error:**

```json
{
  "error": "Token no proporcionado"
}
```

### Códigos de estado utilizados

* `200` → Solicitud exitosa
* `400` → Error de validación
* `401` → No autorizado
* `404` → Ruta no encontrada
* `500` → Error interno del servidor

---

## ☁️ Deploy en Vercel

La API está desplegada en **Vercel**, utilizando **Node Runtime (legacy)** para permitir el uso de Express con `app.listen`.

### Archivo `vercel.json`

```json
{
  "builds": [
    {
      "src": "./index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

---

## ▶️ Ejecución local

### Instalar dependencias

```bash
npm install
```

### Ejecutar el servidor

```bash
npm start
```

Servidor disponible en:

```
https://talento-tech-entregafinal.vercel.app/
```

---

## 📝 Aclaraciones finales

* El proyecto **no utiliza arquitectura serverless**
* Express se ejecuta como **servidor tradicional**
* El registro de usuarios no forma parte del alcance de la entrega
* La autenticación y protección de rutas cumplen con los contenidos vistos en clase
* El código fue estructurado siguiendo **buenas prácticas**

---

## 👨‍🎓 Autor

**Entrega Final – Backend con Node.js**
**Rodrigo Alonzo**
Año: **2025**
