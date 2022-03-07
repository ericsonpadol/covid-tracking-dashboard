FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g serve

COPY . ./

EXPOSE 8080

RUN npm run build:production

CMD npm run start:server