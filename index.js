//this is my index
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({Bye: 'hello' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

