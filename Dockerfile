FROM node:12

WORKDIR /usr/src/app/graphqlApp_copy

COPY package.json /usr/src/app/graphqlApp_copy

RUN npm install

COPY . /usr/src/app/graphqlApp_copy

EXPOSE 7000

CMD npm start