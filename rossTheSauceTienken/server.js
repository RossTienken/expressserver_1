const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
})

app.get('/api', function(req, res, next) {
  res.send({message: "Helloooooo from the API"});
})

app.use(function (req, res, next) {
  res.status(418).json({error: "418 I'm a little teapot short and stout here is my handle here is my spout when i get all steamed up hear me shout tip me over and pour me out"})
})
