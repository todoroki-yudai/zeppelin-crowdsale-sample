FROM node:8.8.1-alpine

COPY . /ico
WORKDIR /ico

RUN apk --no-cache add --virtual .deps git python make g++ tzdata && \
    # cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    npm install -g truffle@3.4.8 ethereumjs-testrpc@4.1.3 && \
    npm install && \
    yarn add zeppelin-solidity@1.3.0
