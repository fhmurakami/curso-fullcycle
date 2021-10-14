FROM nginx:latest

# Diretório onde você vai trabalhar dentro do container
WORKDIR /app

# Roda um comando
# RUN apt-get update
# RUN apt-get install vim -y
RUN apt-get update && \
    apt-get install vim -y

# Copia um arquivo do computador para dentro do container
COPY html /usr/share/nginx