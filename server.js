const {port} = require('./config')
const express = require('express')
const app = express();
const db = require('./models');

const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

const dbServer = require('./routes/addToDB')

app.use('/api',dbServer)

db.sequelize.sync({}).then(() => {
    app.listen(port, () => {
        console.log('listning to port :', port);
    })
});



