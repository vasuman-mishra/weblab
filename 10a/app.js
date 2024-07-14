const express = require('express');

const app = express();
var count=0;


function logger(req, res, next) {
    console.log("logged in");
    count++
    next();
}
app.use(logger)
var visit=function(req, res, next) {
    res.visit=count
    console.log("visited : "+count);
    next()
}
app.use(visit)

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.send("<h1>Visited : "+res.visit+"</h1>")
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
