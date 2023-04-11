const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello I\'m Iron Man. People also call me Ankur...\nWelcome to my useless website...')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
