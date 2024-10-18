#   ELDAR-CHALLENGE FRONT REACT

# Aplicación de Publicaciones con Control de Acceso Basado en Roles

Esta es una aplicación full-stack para gestionar publicaciones con control de acceso basado en roles utilizando React y Express. La aplicación soporta diferentes roles de usuario y permisos para controlar el acceso a varias rutas.

## Características

- Autenticación de usuario con JWT
- Control de acceso basado en roles (usuario, administrador)
- Rutas protegidas para administrador y usuario
- Sesión persistente con almacenamiento local
- Notificaciones de error con toast
- Servidor API con TypeScript

## Tecnologías Utilizadas

- **Frontend**: React, TypeScript, Redux, React Router, Bootstrap
- **Backend**: Node.js, Express, TypeScript, JWT
- **Base de Datos**: (no se ha utilizado mas que un mock con jsonserver en local para la obtencion de usuarios)
- **Herramientas**: concurrently, axios

### Prerrequisitos

- Node.js y npm 
## Instalación
# Pasos para Ejecutar la Aplicación
- 1- Clonar el Repositorio: Abre tu terminal y clona el repositorio desde GitHub:
    `git clone https://github.com/julian-e-herrera/eldar-challenge.git`
- 2- Navegar al Directorio del Proyecto: Cambia al directorio del proyecto clonado:
    `cd eldar-challenge`
- 3- Instalar las Dependencias: Instala los módulos de Node necesarios para el proyecto. Este paso instalará todas las dependencias definidas en el archivo package.json:
    `npm install`
- 4- Ejecutar la Aplicación: Ejecuta el comando para iniciar tanto el servidor interno como la aplicación React de manera simultánea:
    `npm run dev:all`

## Available Scripts

Inicia Ambos Servidores Simultáneamente
### `npm run dev:all`

Runs the app in the development mode.

Uso
Abre la aplicación en tu navegador en http://localhost:3000.

# Inicia sesión con las siguientes credenciales:

- Usuario: user@example.com / userpass

- Administrador: admin@example.com / adminpass

Navega al Dashboard o a la página de Usuarios según tu rol.

## Estructura del Proyecto

```bash
eldar-challenge
├── public
├── src
│   ├── app
│   │   ├── components
│   │   ├── pages
│   │   ├── reduxStore
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── ...
├── package.json
└── ...
├── data
│   ├── src
│   │   ├── auth.json
│   │   ├── db.json
│   │   ├── authServer.ts
└── package.json
```


Endpoints de la API
Autenticación

POST /login

Request: { email: string, password: string }
Response: { accessToken: string, user: { id: number, email: string, role: string } }
Usuarios


GET /users
Request: Headers { Authorization: 'Bearer <token>' }
Response: [ { id: number, email: string, role: string }, ... ]

Rutas Permitidas por Rol
Rutas para Usuario
/dashboard: Esta ruta está permitida para usuarios con rol de "user" y "admin". Permite a los usuarios ver el panel de control con sus publicaciones y actividades.

Rutas para Administrador
/dashboard: Esta ruta está permitida para usuarios con rol de "user" y "admin". Permite a los administradores ver el panel de control, similar a los usuarios.

/users: Esta ruta está permitida solo para usuarios con rol de "admin". Permite a los administradores ver y gestionar la lista de usuarios.

## Decisión Arquitectónica
Separación del Frontend y Backend
Modularidad: Mantener el frontend y el backend en módulos separados facilita el mantenimiento, la actualización y la escalabilidad del proyecto. El frontend en React se centra en la interfaz de usuario y la experiencia del usuario, mientras que el backend en Express maneja la lógica del servidor y la gestión de datos.

Uso de Redux para la Gestión del Estado
Consistencia del Estado: Redux proporciona un contenedor predecible del estado de la aplicación, asegurando que todas las partes de la aplicación tengan acceso a un estado consistente.

Persistencia del Estado: Al utilizar localStorage para guardar el token de autenticación, la sesión del usuario persiste incluso si la página se recarga o se cierra el navegador.

Control de Acceso Basado en Roles
Seguridad: Implementar control de acceso basado en roles asegura que solo los usuarios autorizados puedan acceder a ciertas rutas y funcionalidades. Esto se gestiona tanto en el frontend, con componentes de ruta protegida, como en el backend, con middleware de autenticación.

Flexibilidad: La estructura permite añadir fácilmente nuevos roles y permisos si la aplicación escala en el futuro.

Uso de Interceptores de Axios
Manejo Global de Errores: Los interceptores de Axios permiten manejar errores globalmente, como la autenticación fallida, y mostrar mensajes consistentes al usuario mediante notificaciones tipo toast.

Simplificación del Código: Centraliza la lógica de manejo de errores y de autenticación, reduciendo la repetición de código en las solicitudes API.

Context para Strings y Constantes
Mantenibilidad: Centralizar los strings y las constantes de la aplicación en contextos o archivos de configuración facilita la actualización de mensajes y rutas sin buscar y reemplazar en todo el código.

Consistencia: Asegura que los mensajes y las rutas sean consistentes en toda la aplicación, mejorando la experiencia del usuario.

Este enfoque arquitectónico asegura que la aplicación sea segura, escalable y fácil de mantener, con una clara separación de responsabilidades entre frontend y backend. 🚀


