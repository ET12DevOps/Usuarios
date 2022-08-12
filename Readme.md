# Usuarios

Crear proyecto
```
npm init
```

Instalar dependencias
```
npm install express --save
npm install -g nodemon --save-dev
```

Agregar en archivo **package.json** comando **nodemon**
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "nodemon": "node app.js"
  },
```

Instala dependecias del archivo **package.json**
```
npm install 
```

## v2/refactor

- Se agregaron comentarios en los endpoints
- Renombramiento de **req** y **res**

## v3/actualizar-version-js

Instalar las siguientes dependencias
```
npm i -D @babel/cli @babel/core @babel/node @babel/preset-env
```

### Configuracion package.json

Agregar en archivo **package.json** comando **dev**
```json
"scripts": {
    "dev": "nodemon ./ --exec babel-node"
  },
```

### Configuracion app.js

- Modificar la notacion de importacion de bibliotecas

```js
//importa dependencia de la biblioteca express
import express, { json } from 'express'

//crea la aplicacion 
const app = express()

//lee el body en formato json
app.use(json())
```

### Configuracion Babel

- Crear el archivo **.babelrc** con el contenido
```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

### Ejecucion de proyecto 

Para ejecutar el proyecto en modo **dev**
```
npm run dev
```

## v4/instalar-complementos

Instalar las siguientes dependencias (morgan y dotenv)
```
npm i -D morgan dotenv
```
### Configuracion morgan

- En el archivo **app.js** agregar la referencia al paquete

```js
import express, { json } from 'express'
import morgan from 'morgan'
...
app.use(json())
app.use(morgan('dev'))
```

### Configuracion dotenv
- Crear el archivo **.env** con el contenido
```
PORT=3000
```

- En el archivo **app.js** agregar la referencia al paquete

```js
import express, { json } from 'express'
import morgan from 'morgan'
import 'dotenv/config'
...
const port = process.env.PORT
```

## v5/refactor-routes

- Mover los endpoints del archivo **app.js** al archivo **usuario.routes.js** dentro del directorio **routes**
- Analizar los cambios realizados en el archivo **app.js** y **usuario.routes.js**

## v6/mongodb

### Configuracion mongoose
Ejecutar en la terminal el siguiente comando
```
npm i mongoose
```