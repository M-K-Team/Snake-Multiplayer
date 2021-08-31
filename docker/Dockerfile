FROM node:14.17.5

WORKDIR /app/server

COPY /server/package*.json ./

RUN npm install

WORKDIR /app/app

COPY /app/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

WORKDIR /app/app

RUN npm run build

ENV PORT=8080

EXPOSE 8080

WORKDIR /app/server

CMD [ "npm", "start" ]