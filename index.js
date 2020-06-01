const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('./assets'));

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router
app.use('/', require('./routes/index'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err) => {
	if (err) {
		console.log(`Error in running the server: ${err}`); //Interpolation
		return;
	}
	console.log(`server running at port : ${port}`);
});
