# Etapa de construcción
FROM node:18-alpine AS build

# Creo el directorio de trabajo
WORKDIR /app

# Copiar package*.json
COPY package*.json ./

# Instalar dependencias
RUN npm install 

# Copio el código fuente
COPY . .

# Compilar la aplicación
RUN npm run build

# Etapa final: usar Nginx para servir la aplicación
FROM nginx:alpine

# Copiar solo los archivos compilados desde la etapa de construcción
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80

# Iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]


######### aditional steps ##########
# Para buildear la imagen y correr un contenedor
# docker build -t crewland-frontend-image:latest .
# docker run -p 80:80 --name crewland-frontend crewland-frontend-image
