const multer = require('multer')
const mongoose = require('mongoose');
const { Teacher, Student } = require('./models/dbSchema')
const express = require('express');
const path = require('path')
const session = require('express-session');
const cors = require('cors')
require('dotenv').config()
const port = process.env.port;
const dbUrl = process.env.dbUrl;
///////////////////////////////
const app = express();

app.use(express.static('public'));
app.use('/src-img-video', express.static('src-img-video'));
//app.use(express.static('./fornt-end-sohag-teachers/build')) // used in production
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: '55888kprpel kmlkr', saveUninitialized: false, resave: false }));

////////////////
///////////////
mongoose.connect(dbUrl).then(() => {
    app.listen(port, () => {
        console.log('running on port ' + `${port}`);

    })
})

/////////////////// 

// get home page info 

app.get('/home', (req, res) => {
    Student.find({}).limit(6)
        .then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(err => res.json({ error: "Please call Admin" }))


})

///////////////////// xxxxx teachers page  route 
app.get('/all/:level/:special',

        (req, res) => {

            const level = Number(req.params.level);
            const special = Number(req.params.special);
            console.log(level, special)
            Teacher.find({ level: level, specials: special })
                .then(data => res.json(data))
                .catch(err => res.json({ error: "error happend", name: err }))
        }
    )
    /////////////////// join-us data 
app.post('/join', (req, res) => {


        console.log('get in back ');
        console.log(req.body);

        res.json({ res: true })

    })
    /////////////////// create new profile 
app.post('/createProfile', () => {

    const data = req.body
})