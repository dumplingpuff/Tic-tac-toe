TOKEN="cb3cd2f4c914cc8b36971d23b14aa87b"


curl --request POST http://tic-tac-toe.wdibos.com/games \
--include \
--header "Content-Type: false" \
--header "Authorization: Token token=${TOKEN}" \
--data '{}'
