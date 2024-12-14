NODE_ENV=production
npm install pm2 vite -g && npm install
vite build
# pm2 start server/app.js -i 2 --name "app"
cd ./server && node app.js
