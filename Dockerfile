FROM node:20-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "start" ]
