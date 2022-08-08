Crear el archivo **package.json**
```
npm init --yes
```

Instalar express
```
npm i express
```

Instalar dependencias en modo dev
```
npm i -D nodemon concurrently typescript @types/node @types/express
```

Crear el archivo tsconfig.json
```
npx tsc --init
```
`
En el archivo **tsconfig.json**

descomentar el campo **outdir** con el valor "./dist"

En el archivo **package.json**
```json
"scripts": {
    "build": "npx tsc",
    "start": "node dist/app.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon dist/app.js\""
  }
```

Compilar el proyecto
```
npm run build
```

Ejecutar el proyecto (tslint + nodemon)
```
npm run dev
```