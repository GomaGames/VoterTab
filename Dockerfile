FROM node:alpine

WORKDIR /srv

COPY package.json package-lock.json /srv/
RUN npm install

COPY . /srv/
