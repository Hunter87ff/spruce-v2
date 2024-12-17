#!/bin/bash
vite build
cd server
pm2 start app.js -i 4 --name 'spruce'

while true; do
    echo "Server is Running!!"
    sleep 3600
done
