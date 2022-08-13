# Usuarios

## Version 6

#### Configuracion mongoose

Ejecutar en la terminal el siguiente comando
```
npm i mongoose
```

#### Variable de entorno

- En el archivo **.env** agregar la variable de entorno DATABASE

```
DATABASE=connection_string_mongodb_railway
```

- Crear el archivo **database.js**, aqui se debe configurar la conexion de la aplicacion a mongodb en railway
la cadena de conexion se debe leer desde una variabla de entorno

#### Creacion del modelo

- Por cada coleccion se debe crear un modelo (archivo **usuario.modeljs**). En cada modelo se debe especificar el nombre
de la coleccion, atributos, tipos de datos etc..

#### Endpoints

- En el archivo **usuario.routes.js** se eliminar la lista in-memory, y se rempleaza por la coleccion que se 
encuentra almacenada en mongodb

- Refactorizacion de cada endpoint, con metodos de mongoose (ver documentacion)