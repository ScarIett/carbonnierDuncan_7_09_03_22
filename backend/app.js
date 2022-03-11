const express = require('express');
const app = express();
const cors = require('cors');


const db = require('./models');

const postRouter = require('./routes/Posts')

app.use(express.json());
app.use(cors());

app.use("/posts", postRouter);



db.sequelize.sync().then(() => {
    app.listen(3002, () =>{ 
        console.log("server running on port 3002");
    });
});