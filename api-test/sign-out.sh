#!/bin/bash

TOKEN="token":"31eedf2df2afd09e55732c76d790c7fd"
USER_ID="42"

BASE_URL="http://tic-tac-toe.wdibos.com/"
URL="${BASE_URL}/sign-out/${USER_ID}"

curl ${URL} \
--silent \
--request DELETE \
--header "Content-Type: ${CONTENT_TYPE}" \
--header "Authorization: Token token=${TOKEN}" \


# data output from curl doesn't have a trailing newline
echo
