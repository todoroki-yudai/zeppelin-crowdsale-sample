FROM node:8.8.1-alpine

COPY . /ico
WORKDIR /ico

RUN apk --no-cache add --virtual .api-deps tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del .api-deps && \
    npm install -g truffle@3.4.8 ethereumjs-testrpc@4.1.3 && \
    yarn add zeppelin-solidity@1.3.0
