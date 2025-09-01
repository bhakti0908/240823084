const mongo=require("mongoose");

mongo.connect("mongodb+srv://bhaktisapariya0908_db_user:bhkti0908@bhakti0908.h7jjhrr.mongodb.net/?retryWrites=true&w=majority&appName=bhakti0908",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


const FacultySchema=new mongo.Schema({
    name:String,
    department:String,
    startYear:Number,
});
const Faculty=mongo.model("Faculty",FacultySchema);

console.log("MongoDB connected successfully");

const faculty=new Faculty({
    name:"Bhakti Sapariya",
    department:"Computer Science",
    startYear:2020,
});

faculty.save().then(()=>{
    console.log("Faculty saved successfully");
}).catch((error)=>{
    console.error("Error saving faculty:",error);
});