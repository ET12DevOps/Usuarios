FROM node:18

# Creacion directorio de aplicacion
WORKDIR /usr/src/app

# Instalacion de dependecias 
COPY package*.json ./

RUN npm install

# Copio todos los archivos del directorio actual a la imagen /usr/src/app
COPY . .

# Expongo el puerto 3000
EXPOSE 3000

# Ejercuto con el comando "node" la aplicion "app.js"
CMD [ "node", "app.js" ]