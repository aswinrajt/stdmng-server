const express=require('express')

const userController=require('../Controllers/userController')
const studentController=require('../Controllers/studentController')
const jwtmiddle=require('../Middleware/jwtMiddleware')
const multerInstance=require('../Middleware/multerConfig')

const router=express.Router()

router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)
router.post('/addstudent',jwtmiddle,multerInstance.single('image'),studentController.addStudent)
router.get('/getstudents',jwtmiddle,studentController.getstudent)
router.delete('/deletestudent/:id',jwtmiddle,studentController.delstudent)
router.put('/updatestudent/:id',jwtmiddle,multerInstance.single('image'),studentController.updatestudent)


module.exports=router