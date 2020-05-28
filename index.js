const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes/index'));

app.listen(port, (err) => {
	if (err) {
		console.log(`Error in running the server: ${err}`); //Interpolation
		return;
	}
	console.log(`server running at port : ${port}`);
});