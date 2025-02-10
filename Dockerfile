FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./app/* /var/www/html
COPY $PWD/app/* /var/www/html
