'use strict';

require('dotenv').config();

const express = require('express');
const request = require('request');

const app = express();

const PORT = process.env.PORT

app.get('/meet', meet);


const options = {
	method: 'GET',
	// A non-existing sample userId is used in the example below. 
	url: 'https://api.zoom.us/v2/users/me',
	headers: {
		authorization: `Bearer ${process.env.JWT}` // Do not publish or share your token publicly.
	}
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

function meet(req, res) {
    console.log('worked')
}

app.listen(PORT, () => console.log('hello form' + PORT))