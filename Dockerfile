#Compilación
FROM node:20.14.0 AS dev-deps

WORKDIR /app

COPY package.json package.json

RUN npm install

#etapa 2
FROM node:20.14.0 AS builder

WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .

RUN npm run build 

#etapa de produccion
FROM nginx:1.23.3 AS prod
EXPOSE 80

COPY --from=builder /app/dist/mangaman-ssr/browser/  /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]