# Usuarios

## Version 4

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