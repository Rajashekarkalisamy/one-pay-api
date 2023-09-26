# one-pay-api

# Docker compose Re build
sudo docker compose build --no-cache && sudo docker compose up

# Docker compose Build
sudo docker compose up --build

# pm2 reload
sudo docker exec node-node-1 pm2 reload all --update-env

