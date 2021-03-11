FROM node:14-alpine as client_build
WORKDIR /client
COPY client/package.json client/package-lock.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

FROM node:14-alpine
RUN apk add --no-cache tini
WORKDIR /app
COPY --from=client_build /client/dist /client-dist
COPY server/package.json server/package-lock.json ./
RUN npm ci
COPY server/ ./

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "src/index.js"]
