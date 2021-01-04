#!/bin/sh

set -eu



if [ -n "${API_ENDPOINT}" ]; then
  sed -i "s|http://127.0.0.1:7777|${API_ENDPOINT}|" /usr/share/nginx/html/index.html
fi



exec nginx -c /etc/nginx/nginx.conf -g "daemon off;"
