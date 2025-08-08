# 🌙 Vibrar con la Luna – App de Tarot

Aplicación móvil de e-commerce desarrollada con **React Native** y **Expo**, utilizando **Firebase** como backend (Authentication y Realtime Database) y **Redux Toolkit Query** para la gestión de estado y peticiones HTTP.  
Incluye validación de formularios con **Yup**, navegación con **React Navigation**, geolocalización con **Google Geocoding API** y selección de imagen de perfil con **Expo Image Picker**.

---

## 🚀 Tecnologías utilizadas

- **React Native** (con Expo).
- **Firebase Authentication** (registro/login con email y contraseña).
- **Firebase Realtime Database** (persistencia de datos en la nube).
- **Redux Toolkit** y **Redux Toolkit Query** (gestión de estado y llamadas a la API).
- **React Navigation** (navegación tipo stack y tabs).
- **Yup** (validación de formularios de registro).
- **Google Geocoding API** (conversión de coordenadas a dirección).
- **Expo Image Picker** (selección de foto de perfil desde galería o cámara).
- **EAS Build** para despliegue.

---

## 📂 Estructura del proyecto

### Vista rápida en texto

```plaintext
.
├── src/
│   ├── components/
│   │   ├── CameraIcon/
│   │   ├── FlatCard/
│   │   ├── Header/
│   │   ├── Loader/
│   │   ├── SearchInput/
│   │   ├── TextDeliusBold/
│   │   ├── TextDeliusSwashCapsRegular/
│   │   └── index.js
│   ├── data/
│   ├── db/
│   ├── features/
│   ├── global/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   ├── store/
│   └── validations/
├── .env
├── App.js
├── app.json
├── eas.json
├── index.js
├── package.json
└── README.md
```
---

## ⚙️ Configuración del proyecto

### 1 - Clonar repositorio
bash

git clone <-url-del-repo->

cd <-nombre-del-proyecto->

---
### 2 - Instalar dependencias
bash

npm install

---
### 3 - Configurar variables de entorno en .env:
env

EXPO_PUBLIC_BASE_RTDB_URL=https://<tu-proyecto>.firebaseio.com/

EXPO_PUBLIC_BASE_AUTH_URL=https://identitytoolkit.googleapis.com/v1/

EXPO_PUBLIC_API_KEY=<tu-api-key>

---
### 4 - Iniciar el proyecto:
bash

npx expo start

---
## 🛠 Tecnologías utilizadas
- **React Native** (Expo).
- **Redux Toolkit** – manejo de estado global.
- **Redux Toolkit Query (RTK Query)** – fetching de datos y cache.
- **Firebase Authentication** – login y registro de usuarios.
- **Firebase Realtime Database** – almacenamiento y filtrado por categoryId.
- **Yup** – validación de formularios (registro/login).
- **React Navigation** – navegación entre pantallas.
- **Expo Vector Icons** – iconografía.
- **.env** – variables de entorno.

---
## 🔍 Funcionalidades
- **🔐 Registro e inicio de sesión con Firebase Auth.**
- **📂 Filtrado de productos por categoryId desde Realtime Database.**
- **🃏 Listado y detalle de cartas de tarot.**
- **🛒 Agregar productos al carrito.**
- **✅ Validación de datos en formularios con Yup.**

---
## 🔒 Reglas de seguridad de Firebase
### Reglas personalizadas.
- **Proyecto configurado para expirar permisos de lectura/escritura el 8 de agosto de 2026.**

---
## 📌 Notas
- **El filtrado de productos se realiza mediante la propiedad categoryId en vez de category.**
- **Yup implementado para asegurar que los datos de registro/login cumplan con formato válido antes de enviarse a Firebase.**

---






