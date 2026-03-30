FROM node:current-alpine3.23

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build
CMD ["node", ".output/server/index.mjs"]
