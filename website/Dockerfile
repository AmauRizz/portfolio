FROM node:current-alpine3.23 AS base

WORKDIR /app

COPY . .
RUN npm install

FROM base AS dev
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM base AS prod
RUN npm run build
CMD ["node", ".output/server/index.mjs"]