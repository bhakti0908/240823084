const express = require('express');
const router = express.Router();    
const facultyController = require('../Controllers/FacultyControllers');


// Route to get all faculty members
router.get('/getall', facultyController.getAllFaculties);

// Route to get a faculty member by ID
router.get('/getone/:id', facultyController.getFacultyById); 

// Route to create a new faculty member
router.post('/addone', facultyController.createFaculty);

// Route to update a faculty member by ID
router.put('/updateone/:id', facultyController.updateFaculty);

// Route to delete a faculty member by ID
router.delete('/deleteone/:id', facultyController.deleteFaculty);

module.exports = router;