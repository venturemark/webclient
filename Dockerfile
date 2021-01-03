FROM nginx:1.17-alpine

COPY ./build /usr/share/nginx/html
COPY ./script/start.sh /usr/bin/start.sh

CMD ["/usr/bin/start.sh"]
