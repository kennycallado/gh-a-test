FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./app/* /var/www/html
COPY ./app/* /var/www/html
