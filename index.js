var express = require('express');
var bodyParser = require('body-parser');
var Logstash = require('logstash-client');
var request = require('request');
var csv = require('csv-stream');
var path = require('path');
var multer = require('multer');

var upload = multer({
	dest: './uploads'
});

var logstash = new Logstash({
	type: 'udp',
	host: '192.168.99.100',
	port: '5001'
});

var app = express();

app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use('/css', express.static(path.join(__dirname, './css')));
app.use('/js', express.static(path.join(__dirname, './js')));

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(9000, function(){
	console.log('App running on port 9000');
});