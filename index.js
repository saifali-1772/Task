const express = require('express')
const multer = require("multer")
const router = express.Router()
const mongoose = require('mongoose')
const path = require('path')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    image : String
 });

const userModel = mongoose.model('Users', userSchema);

const imageStorage = multer.diskStorage({
    destination: './public/admin/upload/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname))
    }
});

app.get('/user',(req,res)=>{
     userModel.find()
})

app.post('/user', imageUpload.single('fileToUpload'), (req,res)=>{

    const user = new userModel()
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.email = req.body.email
    user.image = req.file.filename
    user.save()

})

app.listen(5000,()=>{
    console.log("Server start on port 5000")
})