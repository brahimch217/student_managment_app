const express = require('express')
const router = express.Router();
const disController = require('../controller/disController');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
/**
 * App Routers
 */
router.get('/', disController.homepage);
router.get('/index-3', disController.index)
router.get('/event-management', disController.eventManagement)
router.get('/page-register', disController.pageregister);
router.get('/page-login', disController.pagelogin);
router.post('/page-login', urlencodedParser, disController.Whilelogin);
/** Student Rout */
router.get('/all-students', disController.allStudent);
router.get('/add-student', disController.addStudent);
router.post('/add-student', disController.addStudentPost);
router.get('/edit-student', disController.editStudent);
router.get('/about-student', disController.aboutStudent)
/** Notes Rout */
router.get('/all-notes', disController.allNots);
router.get('/add-note', disController.addNots);
router.post('/add-note', disController.addNotesOnPost);
router.get('/edit-note', disController.editNots);
/** Techers Rout */
router.get('/all-professors', disController.allTeachers);
router.get('/add-professor', disController.addTeacher);
router.post('/add-professor', disController.addTeacherOnPost);
router.get('/edit-professor', disController.editTeacher);
router.get('/professor-profile', disController.aboutTeacher);
/** Other Rout */
router.get('/app-profile', disController.AppProfile);
router.get('/email-compose', disController.emailCompose);
router.get('/email-inbox', disController.emailInbox);
router.get('/page-lock-screen', disController.pagelockscreen);
router.get('/email-read/:id', disController.readMail)
/** Export router */
module.exports = router;

