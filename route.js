// const express = require("express");
// const app = express();
// const PORT = 3000; // changed from 80 to 3000

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World"); // fixed typo
// });

// app.get('/about/:name', (req, res) => {
//     res.send(`About Page\n${req.params.name}`); // fixed typo
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



// ----------------------------------------------- using postman

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // allows JSON data in POST requests

// GET route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// POST route

// app.post('/data', (req, res) => {
//     const receivedData = req.body;
//     console.log("Received data:", receivedData);

//    console.log(`Name: ${receivedData.name}\n Role: ${receivedData.role}\n Department: ${receivedData.dept}`);
// });

app.post('/data', (req, res) => {
    const receivedData = req.body;
    console.log("Received data:", receivedData);

    res.json({
        message: "Data received successfully",
        data: receivedData
    });
});

app.get('/create', (req, res) => {
    res.send("Create Page");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
