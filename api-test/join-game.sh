TOKEN="1fddb075eee7fc10cf8af734d8854c89"
GAME_ID="2581"

curl --request PATCH http://tic-tac-toe.wdibos.com/games/${GAME_ID} \
--include \
--header "Content-Type: false" \
--header "Authorization: Token token=${TOKEN}" \
--data '{}'
