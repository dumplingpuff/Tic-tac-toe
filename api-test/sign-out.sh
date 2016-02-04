#!/bin/bash

TOKEN="16d1e74cd0e6126f95c13b6602ec44e3"
USER_ID="42"

# CONTENT_TYPE="application/json"

BASE_URL="http://tic-tac-toe.wdibos.com/"
URL="${BASE_URL}/sign-out/${USER_ID}"

curl ${URL} \
--include \
--request DELETE \
--header "Content-Type: ${CONTENT_TYPE}" \
--header "Authorization: Token token=${TOKEN}" \


# data output from curl doesn't have a trailing newline
echo
