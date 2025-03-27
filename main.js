const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*', // Allow all origins (or set a specific frontend origin)
    methods: ['GET'], // Allow only GET requests
    allowedHeaders: ['Content-Type']
}));

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'assets', 'batko.jpg');
    res.download(filePath, 'batko.jpg', (err) => {
        if (err) {
            console.error("Error sending file:", err);
            res.status(500).send("Error downloading the file");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});