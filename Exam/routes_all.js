const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// In-memory dataset
let users = [
    { "id": 11, "name": "Bhakti", "role": "Developer", "dept": "MCA" },
    { "id": 21, "name": "bansi", "role": "Developer", "dept": "MCA" },
    { "id": 31, "name": "vedu", "role": "Developer", "dept": "MCA" },
    { "id": 41, "name": "devika", "role": "Developer", "dept": "MCA" },
    { "id": 51, "name": "shyam", "role": "Developer", "dept": "MCA" }
];

// CREATE route (dummy form)
app.get('/create', (req, res) => {
    res.json({ message: "Form Opened Successfully" });
});

// STORE route (Add new user)
app.post('/store', (req, res) => {
    const user = {
        id: req.body.id,
        name: req.body.name,
        role: req.body.role,
        dept: req.body.dept
    };

    // Check if ID already exists
    if (users.find(u => u.id == user.id)) {
        return res.status(400).json({ message: "User with this ID already exists" });
    }

    users.push(user);
    res.json({ message: "Stored Successfully", user });
});

// EDIT route (show current data for edit)
app.get('/edit/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json({ message: "Editing Data", user });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// UPDATE route
app.put('/update/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name || user.name;
        user.role = req.body.role || user.role;
        user.dept = req.body.dept || user.dept;
        res.json({ message: "Updated Successfully", user });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// DELETE route
app.delete('/delete/:id', (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json({ message: "Deleted Successfully", user: deletedUser[0] });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// SHOW route (single user by ID)
app.get('/show/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json({ message: "User Found", user });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// SHOW ALL users
app.get('/all', (req, res) => {
    res.json({ message: "All Users", users });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
