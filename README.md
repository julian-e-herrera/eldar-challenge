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
1- Clonar el Repositorio: Abre tu terminal y clona el repositorio desde GitHub:
    `git clone https://github.com/julian-e-herrera/eldar-challenge.git`
2- Navegar al Directorio del Proyecto: Cambia al directorio del proyecto clonado:
    `cd eldar-challenge`
3- Instalar las Dependencias: Instala los módulos de Node necesarios para el proyecto. Este paso instalará todas las dependencias definidas en el archivo package.json:
    `npm install`
4- Ejecutar la Aplicación: Ejecuta el comando para iniciar tanto el servidor interno como la aplicación React de manera simultánea:
    `npm run dev:all`
## Available Scripts

Inicia Ambos Servidores Simultáneamente
### `npm run dev:all`

Runs the app in the development mode.\
Dirijase [http://localhost:3000](http://localhost:3000) para verlo en el navegador.



