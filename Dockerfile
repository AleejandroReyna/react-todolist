FROM node:lts-alpine3.14
RUN apk update
WORKDIR /app
COPY . /app/
ENTRYPOINT [ "/app/entrypoint.sh" ]