# one-pay-api

# Docker Installation
If Docker Not Installed in Local system Run this Comand else Ignore this
sudo sh ./docker.sh

# Build & Run Application
sudo docker compose up --build -d

# Run Applications
sudo docker compose up -d

# Endpoints
Adminer: http://localhost:8081/
Mongo Express: http://localhost:8082/
OnePayApi: http://localhost:3000/

# Notes
    1. For the First time use the db-seed.sql file in adminer(http://localhost:8081/) to create the database and tables
    2. Mysql credentials => server: mysql, username: root, password: 12345
    
# Useful Comands 
    pm2 reload: sudo docker exec node-node-1 pm2 reload all --update-env
    Rebuild and Run Application : sudo docker compose build --no-cache && sudo docker compose up -d