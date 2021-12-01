const express = require('express');

const app  = express();

app.get('/', (req: any, res:any) => {
    res.send('working')
})

const PORT: number = /*process.env.PORT ||*/ 5001

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))