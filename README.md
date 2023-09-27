# one-pay-api

# Endpoints

Adminer: http://localhost:8081/
Mongo Express: http://localhost:8082/
OnePayApi: http://localhost:3000/

# Docker compose Re build
sudo docker compose build --no-cache && sudo docker compose up -d

# Docker compose Build
sudo docker compose up --build -d

# pm2 reload
sudo docker exec node-node-1 pm2 reload all --update-env


