const express = require('express');
const path = require("path");
const cors = require('cors');
const app = express();

var corsOptions = {
	origin: ['http://localhost:3000', 'localhost:3000', '127.0.0.1:3000'],
}

app.use(cors(corsOptions))
require('./src/routes/index')(app);

app.use("/", express.static(path.join(__dirname, "client", "build")));
app.use("/:hack", express.static(path.join(__dirname, "client", "build")));

app.use(express.json());
app.listen(3000);

console.log('running at port 3000')
