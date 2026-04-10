FROM node:current-alpine3.23 AS base

WORKDIR /app

COPY . .
RUN npm install

FROM base AS production
RUN npm run build
CMD ["node", ".output/server/index.mjs"]

FROM base AS development
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]