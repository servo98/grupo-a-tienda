FROM node:20-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]

