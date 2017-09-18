FROM node:alpine

EXPOSE 5000
WORKDIR /app
ADD . /app
CMD nginx -c /app/nginx.conf

RUN apk add --no-cache nginx
RUN yarn
RUN yarn run build
