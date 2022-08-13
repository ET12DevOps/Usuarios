# Usuarios

## Version 3

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