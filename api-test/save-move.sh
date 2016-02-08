TOKEN="2337755be09932ad36231f0ba5a1cb74"
GAME_ID="2581"

curl --request PATCH http://tic-tac-toe.wdibos.com/games/${GAME_ID} \
--include \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'
