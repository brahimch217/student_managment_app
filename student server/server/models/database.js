const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.qhibw.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function () {
    console.log('connected')
});

//Models
require('./Discover');
require('./Filds');
require('./event');
require('./Artisan');
require('./Words');

