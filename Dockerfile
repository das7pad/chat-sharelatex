FROM node:6.14.1 as app

WORKDIR /app

#wildcard as some files may not be in all repos
COPY package*.json npm-shrink*.json /app/

RUN npm install --quiet

COPY . /app



FROM node:6.14.1

WORKDIR /app

CMD ["node", "--expose-gc", "app.js"]


COPY --from=app /app /app

USER node
