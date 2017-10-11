import express from 'express';
import bodyParser from 'body-parser';
import dbconfig from './config/dbmongo.js';
import PesertaRoute from './peserta/pesertaRoute';

let app = express();
app.use(bodyParser.json());

app.use('api', PesertaRoute);

app.get('/', function(req,res){
	res.send('Selamat Datang');
});

app.listen(8820);