FROM hub.c.163.com/library/node:latest

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Bundle app source
COPY . /home/app
RUN npm install --production
RUN npm install -g pm2

ENV HTTP_PORT=8080
ENV NODE_ENV=production

EXPOSE 8080
# CMD ["npm", "start"]
CMD ["pm2-docker", "./app.js"]
