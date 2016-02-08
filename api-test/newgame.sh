TOKEN="2337755be09932ad36231f0ba5a1cb74"

url () {
  curl --request POST http://tic-tac-toe.wdibos.com/games \
  --include \
  --header "Content-Type: false" \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode '{}'

}


url
echo
