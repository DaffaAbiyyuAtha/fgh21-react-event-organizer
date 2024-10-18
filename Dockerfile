FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .

ARG VITE_APP_BACKENDURL
ENV VITE_APP_BACKENDURL=$VITE_APP_BACKENDURL

RUN npm install -g serve@latest
RUN npm install
RUN npm run build

FROM nginx:1.25.4-alpine-slim AS prod

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 5000

CMD [ "nginx", "-g", "daemon off;" ]