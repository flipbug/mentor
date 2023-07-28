FROM node:20.1-slim as base

WORKDIR /home/node/app
COPY package.json package-lock.json ./

RUN npm ci --include=dev

COPY . .

RUN npm run build --no-lint 

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

EXPOSE 3000

CMD ["npm", "run", "serve"]
