require('../models/database');
const student = require('../models/student');
const teacher = require('../models/teacher');
const note = require('../models/note');
const recour = require('../models/recour');
/**
 * GET / 
 * Homepage
 */
exports.homepage = async (req, res) => {
    try {
        res.render('page-login',);

    } catch (error) {
        console.log(error)
    }
}
exports.index = async (req, res) => {
    try {
        const totelStudentInt = student.length;
        const StudentNumber = totelStudentInt;
        const totelTeachersInt = teacher.length;
        const TeachersNumber = totelTeachersInt.toString();
        const limitNumber = 8;
        const students = await student.find({}).sort({ _id: -1 }).limit(limitNumber);
        const teachers = await teacher.find({}).sort({ _id: -1 }).limit(limitNumber);

        res.render('index-3', { StudentNumber: StudentNumber, TeacherNumber: TeachersNumber, students, teachers });
    } catch (error) {
        console.log(error)
    }
}
exports.eventManagement = async (req, res) => {
    try {
        res.render('event-management',);

    } catch (error) {
        console.log(error)
    }
}
exports.pageregister = async (req, res) => {
    try {
        res.render('page-register',);

    } catch (error) {
        console.log(error)
    }
}
exports.pagelogin = async (req, res) => {
    try {
        res.render('page-login',);

    } catch (error) {
        console.log(error)
    }
}
exports.Whilelogin = async (req, res) => {
    const credential = {
        email: "admin@test.com",
        pass: "admin"
    }
    if (req.body.email == credential.email && req.body.pass == credential.pass) {
        try {
            res.redirect('/index-3',);
        } catch (error) {
            console.log(error)
        }
    }
}
/** =============================
 * =========== Work with Students 
 * ============================ */
exports.allStudent = async (req, res) => {
    try {
        const students = await student.find({});
        res.render('all-students', { students });
    }
    catch (error) {
        console.log(error)
    }
}
exports.addStudent = async (req, res) => {
    try {
        const students = await student.find({}).find;
        res.render('add-student', { students });
    }
    catch (error) {
        console.log(error)
    }
}
exports.addStudentPost = async (req, res) => {
    try {
        const newStudent = new student({
            _id: req.body.numéro_dinscription,
            Nom: req.body.Nom,
            Prénom: req.body.Prénom,
            Email: req.body.Email,
            Address: req.body.Nom,
            Classer: req.body.classe,
            Date_naissance: req.body.naissence,
            Gener: req.body.gener,
            Groupe_sanguin: req.body.Groupe,
            Nom_parents: req.body.Nom,
            numéro_inscription: req.body.numéro_dinscription,
            Numéro_portable: req.body.Numéro,
            Numéro_portable_parents: req.body.Numéro_parents,
            Registration_Date: req.body.date,
        })
        await newStudent.save();
        res.redirect('/add-student');
    }
    catch (error) {
        res.redirect('/add-student');
    }
}
exports.editStudent = async (req, res) => {
    try {
        res.render('edit-student',);
    }
    catch (error) {
        console.log(error)
    }
}
exports.aboutStudent = async (req, res) => {
    try {
        res.render('about-student',);
    }
    catch (error) {
        console.log(error)
    }
}
/** =============================
 * =========== Work with NOTES 
 * ============================ */
exports.allNots = async (req, res) => {
    try {
        const notes = await note.find({});
        res.render('all-library', { notes });

    } catch (error) {
        console.log(error)
    }
}
exports.addNots = async (req, res) => {
    try {
        res.render('add-library',);
    } catch (error) {
        console.log(error)
    }
}
exports.addNotesOnPost = async (req, res) => {
    try {
        const newNote = new note({
            name: req.body.nom,
            module: req.body.module,
            numéro: req.body.numero,
            td: req.body.td,
            tp: req.body.tp,
            examen: req.body.examen,
            Department: req.body.department,
            semestre: req.body.semestre,
            Date: req.body.date,
            Note: (((parseFloat(req.body.td) + parseFloat(req.body.tp)) / 2) * 0.4 + (parseFloat(req.body.examen) * 0.6)).toString(),
            Status: req.body.status,
            assets_details: req.body.comment,
            coff: req.body.coff,
            ratrapage: req.body.ratrapage
        })
        await newNote.save();
        res.redirect('/add-note');
    }
    catch (error) {
        res.redirect('/add-note');
    }
}
exports.editNots = async (req, res) => {
    try {
        res.render('edit-library',);
    } catch (error) {
        console.log(error)
    }
}
/** =============================
 * =========== Work with TEACHRES 
 * ============================ */
exports.allTeachers = async (req, res) => {
    try {
        const teachers = await teacher.find({});
        res.render('all-professors', { teachers });
    } catch (error) {
        console.log(error)
    }
}
exports.addTeacher = async (req, res) => {
    try {
        res.render('add-professor',);
    } catch (error) {
        console.log(error)
    }
}
exports.addTeacherOnPost = async (req, res) => {
    try {
        const newTeacher = new teacher({
            Nom: req.body.nom,
            Prénom: req.body.prénom,
            Email: req.body.email,
            Registration_Date: req.body.insecription,
            Mot_passe: req.body.pass,
            Gener: req.body.gener,
            Numéro_portable: req.body.num,
            Désignation: req.body.des,
            Départment: req.body.dep,
            Date_naissance: req.body.naissance,
            Éducation: req.body.edu,
        })
        await newTeacher.save();
        res.redirect('/add-professor');
    }
    catch (error) {
        res.redirect('/add-professor');
    }
}
exports.editTeacher = async (req, res) => {
    try {
        res.render('edit-professor',);
    } catch (error) {
        console.log(error)
    }
}
exports.aboutTeacher = async (req, res) => {
    try {
        res.render('professor-profile',);
    } catch (error) {
        console.log(error)
    }
}
/** =============================
 * ================== other Pages  
 * ============================ */
exports.AppProfile = async (req, res) => {
    try {
        res.render('app-profile',);
    } catch (error) {
        console.log(error)
    }
}
exports.emailCompose = async (req, res) => {
    try {
        res.render('email-compose',);
    } catch (error) {
        console.log(error)
    }
}
exports.emailInbox = async (req, res) => {
    try {
        const recours = await recour.find({});
        res.render('email-inbox', { recours });
    } catch (error) {
        console.log(error)
    }
}
exports.pagelockscreen = async (req, res) => {
    try {
        res.render('page-lock-screen',);
    } catch (error) {
        console.log(error)
    }
}
exports.readMail = async (req, res) => {
    try {
        let mailId = req.params.id;
        const message = await recour.findById(mailId);
        res.render('email-read', { message })
    } catch (error) {
        console.log(error)
    }
}