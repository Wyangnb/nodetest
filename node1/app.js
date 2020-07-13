const express = require('express')
const http = require('http');
const https = require('https');
const fs = require('fs')
const app = express();
const httpsOption = {
    key: fs.readFileSync('./https/4203046_www.wy456.top.key'),
    cert: fs.readFileSync('./https/4203046_www.wy456.top.pem')
}
http.createServer(app).listen(80);
https.createServer(httpsOption, app).listen(443);