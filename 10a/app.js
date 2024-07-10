const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

let visitorCount = 0;

// Logger middleware
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

// Visitor counter middleware
function visitCounter(req, res, next) {
    let visits = req.cookies.visits ? parseInt(req.cookies.visits) : 0;
    visits++;
    res.cookie('visits', visits, { maxAge: 900000, httpOnly: true });
    req.visitCount = visits;
    visitorCount++;
    next();
}

// Use the custom middleware
app.use(logger);
app.use(visitCounter);

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to get visit count
app.get('/visit-count', (req, res) => {
    res.json({ count: req.visitCount });
});

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
