const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/DataBase", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function () {
    console.log('connected')
});

//Models
require('./note');
require('./student');
require('./teacher');
require('./recour');

