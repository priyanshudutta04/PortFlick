FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npx prisma generate

CMD ["node", "index.js"]
