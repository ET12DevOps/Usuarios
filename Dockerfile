# ---------- Base ----------
FROM node:18 AS base

WORKDIR /app

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - dist: A production build compiled with Babel
FROM base AS builder

COPY package*.json .babelrc ./

RUN npm install

COPY ./src ./src

RUN npm run build

# Eliminar dev dependencies
RUN npm prune --production 

# ---------- Release ----------
FROM base AS release

# Copio todos los archivos del directorio actual a la imagen /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expongo el puerto 3000
EXPOSE 3000

USER node

# Ejercuto con el comando "node" la aplicion "app.js"
CMD ["node", "./dist/app.js"]