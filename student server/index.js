/**
 * Librarey import 
 */
const express = require('express')
const app = express();
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * MongoDb Setup
 */
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/DataBase",)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function () {
    console.log('connected')
});


/**
* Import Models
*/

const StudentData = require('./models/student');
const TeachersData = require('./models/teacher');
const notsData = require('./models/note');

/**
 *  Students  API
 */
app.get('/api/students', async (req, res) => {
    const Students = await StudentData.find();


    res.send(Students);
});
app.post('/api/students', async function (req, res) {
    await StudentData.create(req.body);
    res.send(req.body)
});

app.put('/api/students/:id', async (req, res, next) => {
    StudentData.findByIdAndUpdate(
        { _id: req.params.id }, req.body
    ).then(function (student) {
        StudentData.findOne({ _id: req.params.id }).then(function (student) {
            res.send(student);
        })
    })
});


app.delete('/api/students/:id', async (req, res, next) => {
    StudentData.findByIdAndDelete(
        { _id: req.params.id }).then(function (student) {
            res.send(student);
        })

})

/**
 * Notes API 
 */
app.get('/api/notes', async (req, res) => {
    const Notes = await notsData.find();
    res.send(Notes);
});
app.post('/api/notes', async function (req, res) {
    await notsData.create(req.body);
    res.send(req.body)
});

app.put('/api/notes/:id', async (req, res, next) => {
    notsData.findByIdAndUpdate(
        { _id: req.params.id }, req.body
    ).then(function (nots) {
        notsData.findOne({ _id: req.params.id }).then(function (nots) {
            res.send(nots);
        })
    })
});


app.delete('/api/notes/:id', async (req, res, next) => {
    notsData.findByIdAndDelete(
        { _id: req.params.id }).then(function (note) {
            res.send(note);
        })

})

/**
 * Teachers API 
 */
app.get('/api/teachers', async (req, res) => {
    const Teachers = await TeachersData.find();
    res.send(Teachers);
});
app.post('/api/teachers', async function (req, res) {
    await TeachersData.create(req.body);
    res.send(req.body)
});

app.put('/api/teachers/:id', async (req, res, next) => {
    TeachersData.findByIdAndUpdate(
        { _id: req.params.id }, req.body
    ).then(function (teachers) {
        TeachersData.findOne({ _id: req.params.id }).then(function (teachers) {
            res.send(teachers);
        })
    })
});


app.delete('/api/teachers/:id', async (req, res, next) => {
    TeachersData.findByIdAndDelete(
        { _id: req.params.id }).then(function (teachers) {
            res.send(teachers);
        })

})


app.listen(port, () => console.log(`The App listening on port ${port}!`))
