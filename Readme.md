# Usuarios

## Version 7

#### Refactor

- En esta version se abstrae el comportamiento definido en el archivo **uruarios.routes.js** en un nuevo archivo **usuario.controller.js** 

- El objetivo detras de esto es la separacion de responsabilidades del router. Anteriormente el router era responsable de aceptar las peticiones HTTP y procesarlas. Ahora el router unicamente será encargado de aceptar las peticiones HTTP y el procesamiento se delegará en el controller

- Para realizar el refactor se debe desplazar el procesamiento del request HTTP a un nuevo método en el controller, y dicho método se debe llamar desde el router con la ruta correspondiente