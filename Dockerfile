FROM node:alpine

WORKDIR /app

COPY package.json package.json

RUN apk add --no-cache git && yarn install

COPY . ./

CMD ["yarn","start"]