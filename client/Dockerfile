FROM node:24 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#production

FROM node:24

WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD [ "serve" , "-s", "dist", "-l", "3000" ]


