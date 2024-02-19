FROM node:21.6.0

RUN yarn install

COPY . .

RUN yarn build