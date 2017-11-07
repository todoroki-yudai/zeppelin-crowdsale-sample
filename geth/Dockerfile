FROM ethereum/client-go:v1.7.2

RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

ENTRYPOINT ["geth"]
