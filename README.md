# 📦 Laravel Docker Environment

- Boilerplate for Laravel 11 Framework

## 🚀 Getting Started

### Navigate to the Project Directory:
```bash
cd /laravel-boilerplate
```

### Set laravel .env:
```bash
cp .env.example .env
```

### Build Docoker containers
```bash
docker-compose up --build
```

### Enter web container with bash
```bash
docker-compose exec web bash
```

### Install composer dependencies for laravel
```bash
composer install

composer dump-autoload -o
```
### Generate a laravel key
```bash
php artisan key:generate"
```

### Run Vue app:
```bash
docker-compose exec web bash
npm run dev
```


## ⚙️ General Docker Commands

### Remove Containers:
```bash
docker rm $(docker ps -qa)
```

### Remove volumes:
```bash
docker-compose down -v
```

### Build containers:
```bash
docker-compose up --build
```

```bash
### Stop and remove containers
docker-compose down
docker rm $(docker ps -a -q)
```