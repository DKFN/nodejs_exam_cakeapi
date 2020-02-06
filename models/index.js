const mongoose = require('mongoose');
const cake = require('./cake');

mongoose.connect('mongodb://localhost:27017/dkfn_cakes', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})
	.then(() => console.log('Connected to cake DB ....'))
	.catch(err => console.error('Cannot connect to db : ' + err));

module.exports.Cake = cake;
