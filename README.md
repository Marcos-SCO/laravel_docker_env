# laravel_docker_env
Boilerplate for Laravel 11 Framework

# How to run

## Build containers
- docker-compose up --build

## Access the web container service and execute the commands inside
 - docker-compose exec web bash
 - composer install && composer dump-autoload -o
 - php artisan key:generate

# General docker commands

## Remove containers
- docker rm $(docker ps -qa)

## Remove volumes
- docker-compose down -v

## Build container
- docker-compose up --build