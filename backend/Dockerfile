FROM node:20-alpine3.16

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev"]