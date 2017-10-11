import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.get('/', function(req,res){
	res.send('Selamat Datang');
});

app.listen(8820);