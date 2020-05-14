const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(8080);
console.log('Listening on port 8080...');

app.get('/', (request, response) => {
	response.send('Hello from Express!');
})

