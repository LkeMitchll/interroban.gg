FROM node:alpine

EXPOSE 5000
WORKDIR /app
ADD . /app

# Install nginx & copy config
RUN apk add --no-cache nginx
RUN echo "pid /tmp/nginx.pid;" >> /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY site.conf /etc/nginx/conf.d/default.conf

# Install depends and build
RUN yarn install
RUN yarn run build

# Run nginx
CMD nginx
