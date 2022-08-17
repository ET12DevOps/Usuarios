## Usuarios

### Version 1

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

Para ejecutar el proyecto se debe instalar las dependecias del archivo **package.json** con el siguiente comando
```
npm install 
```
