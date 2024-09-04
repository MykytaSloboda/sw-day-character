FROM node:20-bookworm

WORKDIR /app

COPY package.json .

RUN yarn install

RUN npx -y playwright@1.46.1 install --with-deps

COPY . .

RUN yarn run build

EXPOSE 3000

CMD [ "yarn", "run", "vite" ]
