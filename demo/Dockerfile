FROM hub.lumigame.com/docker-hub/library/node:18.1-alpine AS base

WORKDIR /app
RUN npm i -g pnpm

FROM base AS build 

WORKDIR /app

COPY package.json ./
RUN pnpm run reg &&\
    pnpm install

COPY . .
RUN pnpm run build

FROM nginx:1.23.3-alpine-slim AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]