FROM keymetrics/pm2:latest-alpine

WORKDIR /app

# bundle APP files
COPY * ./

# install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

EXPOSE 8000

CMD ["yarn", "start"]
