const mongoose = require('mongoose');


///////////////teachers schema
const TecherSchema = new mongoose.Schema({

        name: String,
        title: String,
        lastexp: String,
        gov: String,
        areaS: [],
        img: String,
        vedio: String,
        allExp: [],
        fac: String,
        whats: String,
        phone: String,
        level: [],
        specials: []



    })
    ///////////////// students shema 
const studentShema = mongoose.Schema({


    img: String,
    name: String,
    school: String,
    level: String,
    excellent: String,

})


const Student = mongoose.model('Student', studentShema)
const Teacher = mongoose.model('Teacher', TecherSchema);

module.exports = { Teacher, Student };