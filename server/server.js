const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');

const PORT=3000;

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', function(req,res){
    res.send('Hello from server!');
})
app.post('/auten',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"data received"});
    
})

app.listen(PORT, function(){
    console.log("Server running on localhost:"+PORT);
});

const hardcodedCredentials = {
  email: 'admin@gmail.com',
  password: 'admin123'
};

app.get('/', function(req, res) {
  res.send('Hello from server!');
});


app.post('/login', function(req, res) {
  const { email, password } = req.body;
  if (email === hardcodedCredentials.email && password === hardcodedCredentials.password) {
    res.status(200).send({ message: 'Login successful', token: 'abcdefghijklmnopqrstuvwxyz' });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});


