FROM php:8.1-fpm-alpine

# install composer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

# install packages
RUN apk update
RUN apk add git nodejs npm
RUN npm install -g yarn
RUN yarn init -y
RUN yarn add vite react axios sass
RUN yarn

# install php extensions
RUN docker-php-ext-install pdo pdo_mysql