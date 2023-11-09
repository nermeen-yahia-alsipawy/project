const express = require('express');
const mongoose = require('mongoose');


let app = express();

//connect server to mongo server ==> local database
async function connect(){
    let connection = await 
    mongoose.connect('mongodb://localhost:27017/student');
    if (!connection){
      console.log('CANNOT CONNECT WITH DATABASE ')
    }
    else{
      console.log('SERVER IS CONNECTED WITH DATABASE ツ')
    }
}connect()

//schema

const studentSchema = new mongoose.Schema({
       name : String ,
       phone : String ,
       password : String ,
       age : Number ,
       address : String , 
       bio : String ,
    });
//convert schema to model (class)
let studentModel = new mongoose.model("student" , studentSchema);
const courseSchema = new mongoose.Schema({
    name : String ,
    discription : String ,
 });
 let courseModel = new mongoose.model("course" , courseSchema);

 let alistudent = new studentModel({
    name : "Ali" ,
    phone : "0102354745" ,
    password :"mmmmmm" ,
    age : 22 ,
    address : "al sharkaia egypt" ,
    bio : "programmer" ,

 }).save();

 let ayastudent = new studentModel({
   name : "Aya" ,
   phone : "01086309769" ,
   password :"kkkkkk" ,
   age : 21 ,
   address : "ismailia egypt" ,
   bio : "programmer" ,

}).save();

let csscourse =new courseModel({
    name : "css" ,
    discription : "for web digsen"
 }).save();

 app.get('/student' , async (req,res)=>{
    let allstudent = await studentModel.find();
    res.status(200);
    console.log(allstudent.length)
    res.json(allstudent)
 })
 app.get('/course' , async (req,res)=>{
    let allcourse = await courseModel.find();
    res.status(200);
    console.log(allcourse.length)
    res.json(allcourse)
 })

app.listen(3000, function(){
    console.log('SERVER NOW IS OPENED ☃')
} )