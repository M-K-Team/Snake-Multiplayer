'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;

// App
const app = express();

app.use("/static", express.static(path.resolve("../app/build/static")));
app.use("", express.static(path.resolve("../app/build")));

app.get('/', (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));