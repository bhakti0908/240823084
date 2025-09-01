const express=require('express');
const app=express();
const facultyroutes=require('./Routes/FacultyRoutes');

app.use(express.json());


//grouping all faculty related routes
app.use('/faculty',facultyroutes);

app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000/faculty");
});