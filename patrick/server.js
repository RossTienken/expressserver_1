const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, function(){
  console.log(`We are listening on port ${port}`)
});

app.get('/api', function(req,res,next){
  res.send( {messsage: 'Hello from API'})
});

app.use(function(req,res,next){
  res.status(404).json( {error: '404 Not Found'})
})
