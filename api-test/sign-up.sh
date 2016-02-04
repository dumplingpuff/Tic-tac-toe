curl --request POST http://tic-tac-toe.wdibos.com/sign-up \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "boothul@gmail.com",
    "password": "bam",
    "password_confirmation": "bam"
  }
}'
