'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const request = require('request');
const mongoose = require('mongoose');

const zoom = require('./src/zoom-model.js')

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const mongooseOptions = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
  };


app.get('/', meet);
app.post('/', notification);

/** user info section */
const options = {
	method: 'GET',
	// A non-existing sample userId is used in the example below. 
	url: 'https://api.zoom.us/v2/users/me',
	headers: {
		authorization: `Bearer ${process.env.JWT}` // Do not publish or share your token publicly.
	}
};

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log('info', body);
// });


/** functions section */

function meet(req, res) {
	// console.log(req)
    console.log('asd');
}

function notification(req,res) {
	console.log('event', req.body);
	console.log('\n \n \n ')
	console.log('participant', req.body.payload.object.participant);

	// if (req.headers.authorization === process.env.verification_token) {
	// 	res.status(200).send('fine')
	// }
	if(req.body.payload.object.participant){
		let record = zoom.create({account_id : req.body.payload.account_id, participant: req.body.payload.object.participant.user_name });
		console.log('record', record);
	// 	// console.log(Zoom.read())
	}

	console.log('worked');
}


mongoose.connect(MONGODB_URI, mongooseOptions);

app.listen(PORT, () => console.log('hello form' + PORT));