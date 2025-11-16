# 🧩 Premisa del Proyecto

## ✅ Configuración inicial

- [x] Creación de un **index.js** como archivo de entrada.  
- [x] Configuración de **NPM** y **package.json** con `"type": "module"`.  
- [x] Instalación de dependencias: **CORS**, **body-parser**, **dotenv**, **firebase** y **jsonwebtoken (JWT)**.

---

## 🚀 Servidor

- [x] Creación de un **servidor con Express** y configuración en *index.js*.  
- [x] Configurar **CORS** para habilitar peticiones de origen cruzado.  
- [x] Configurar **body-parser** como middleware para interpretar los *body* en formato JSON.  
- [x] Establecer **middleware de manejo de errores** (400, 401, 403, 404, 500).  
- [x] Crear un archivo **.env** para las variables de entorno.

---

## 🛣️ Rutas

- [ ] Crear la **capa de rutas** del proyecto.  
- [ ] Definir rutas para productos en **products.routes.js** (`GET`, `POST`, `PUT`, `DELETE`).  
- [ ] Definir rutas para autenticación en **auth.routes.js** (`POST`).  

---

## 🧠 Controladores y Servicios

- [ ] Crear la **capa de controladores** correspondiente a cada ruta.  
- [ ] Crear la **capa de servicios** que responda a los controladores.  

---

## 💾 Acceso a Datos

- [ ] Crear la **capa de modelos**.  
- [ ] Crear un proyecto de **Firestore** en Firebase.  
- [ ] Configurar la conexión a la base de datos de Firestore.  
- [ ] Utilizar la instancia de Firebase creada y desarrollar los métodos necesarios para la interacción con la base de datos.  
- [ ] Conectar los **servicios con los modelos**.  

---

## 🔐 Autenticación y Seguridad

- [ ] Configurar **JWT** en el proyecto.  
- [ ] Crear un **middleware de autenticación** para proteger las rutas correspondientes.  
- [ ] Crear y configurar un **controlador de login** para validar la identidad y devolver un *Bearer Token*.  

---

📘 **Estado general:**

- ✅ Completado: 3  
- ⏳ Pendiente: 17  
