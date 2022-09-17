# Usuarios

## Version 9

#### Docker

- Se agregaron los archivo **Dockerfile** y **.dockerignore**

Ver documentacion oficial [aqui](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

#### Babel

Modificar la configuracion del archivo **.babelrc** con:

```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "debug": true,
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}
```
#### Configuracion

Modificar la siguiente seccion del archivo **package.json**

```
  "main": "src/app.js",
  "scripts": {
    "build": "npm run clean && babel ./src --out-dir dist",
    "start": "node ./dist/app.js",
    "clean": "rm -rf ./dist && mkdir dist",
    "dev": "nodemon --exec babel-node ./src/app.js"
  },
```


