TOKEN="f4f4a0bc82255b35b144ba612c68c5ea"
USER_ID="42"
OLD_PW="bam"
NEW_PW="mab"

BASE_URL="http://tic-tac-toe.wdibos.com"
URL="${BASE_URL}/change-password/${USER_ID}"

url() {

  CONTENT_TYPE="application/x-www-form-urlencoded"

  curl ${URL} \
  --include \
  --request PATCH \
  --header "Content-Type: ${CONTENT_TYPE}" \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode "passwords[old]=${OLD_PW}" \
  --data-urlencode "passwords[new]=${NEW_PW}"
}

url

echo
