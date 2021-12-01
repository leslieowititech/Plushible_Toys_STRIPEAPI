"use strict";
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('working');
});
const PORT = 5001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//# sourceMappingURL=index.js.map