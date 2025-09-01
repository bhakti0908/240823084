const facultySchema=require('../Validations/FacultyValidations');

let faculties=[];

exports.getAllFaculties=(req,res)=>{
    res.json(faculties);
}

exports.createFaculty=(req,res)=>{
    const { error } = facultySchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    };
    const faculty={
        id:faculties.length+1,
        ...req.body
    };
    faculties.push(faculty);
    res.status(201).json({ message: "Faculty created successfully", faculty });
};

exports.getFacultyById =(req,res)=>{
    const id=parseInt(req.params.id);
    const faculty=faculties.find(faculty=>faculty.id===id);
    if(!faculty){
        return res.status(404).json({error:"Faculty not found"});
    }
    res.json(faculty);
    
}

exports.updateFaculty=(req,res)=>{
  const faculty = faculties.find(f => f.id === parseInt(req.params.id));
  if (!faculty) return res.status(404).json({ error: "Faculty not found" });

  const { error } = facultySchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  faculty.name = req.body.name;
  faculty.age = req.body.age;
  faculty.email = req.body.email;

  res.json({ message: "Faculty updated successfully", faculty });
}

exports.deleteFaculty = (req, res) => {
  const id = faculties.findIndex(s => s.id === parseInt(req.params.id));
  if (id === -1) return res.status(404).json({ error: "Faculty not found" });

  const deletedFaculty = faculties.splice(id, 1);
  res.json({ message: "Faculty deleted successfully", faculty: deletedFaculty });
};