
# コンテナ起動

````
docker compose build
````

````
docker compose up -d
````

## Laravelの開発サーバーの起動

````
docker container exec -it laravel_container bash
````

````
cd /app
````

````
composer install
````

````
php artisan serve --host 0.0.0.0 --port 8080
````

http://localhost:8080/

## DB Migrate
````
cd /app
````

````
php artisan migrate
````
## PHP ADMIN
http://localhost:3000/

## breeze install
````
docker-compose exec web composer require laravel/breeze --dev
docker-compose exec web php artisan breeze:install
docker-compose exec web php artisan migrate
````