const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Home route
app.get('/', (req, res) => {
    res.send("Hello World");
});

//  Serve HTML form on /form route
app.get('/form', (req, res) => {
    // res.send(form.html);
    res.sendFile(path.join(__dirname, 'form.html'));
});


//  Handle form submission on /submit
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // Log the data on server
    console.log("Form Data:", req.body);

    // Respond with a thank you message
    res.send(`
        <h2>Thank You!</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <a href="/form">Go back to form</a>
    `);
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
