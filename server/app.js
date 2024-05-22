const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const colorRouter = require('./routes/colorRouter')

app.use(express.json())
app.use(cors())
app.use("/api", colorRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})