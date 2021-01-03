#!/bin/sh

set -eu



if [ -n "$API_ENDPOINT" ]; then
  sed -i "s|apiEndpoint: .*|apiEndpoint: '$API_ENDPOINT',|" /usr/share/nginx/html/index.html
fi



exec nginx -c /etc/nginx/nginx.conf -g "daemon off;"
