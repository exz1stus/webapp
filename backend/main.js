const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: '*', // Allow all origins (or set a specific frontend origin)
    methods: ['GET'], // Allow only GET requests
    allowedHeaders: ['Content-Type']
}));

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'assets', 'batko.jpg');
    res.download(filePath, 'batko.jpg', (err) => {
        if (err) {
            console.error("Error sending file:", err);
            res.status(500).send("Error downloading the file");
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});