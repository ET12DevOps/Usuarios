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

## V2/refactor

- Se agregaron comentarios en los endpoints
- Renombramiento de **req** y **res**

## V3/actualizar-version-js

### Instalar babel.js

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