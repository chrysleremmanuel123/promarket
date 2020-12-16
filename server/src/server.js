const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

env.config();
mongoose.connect(`mongodb+srv://System:root@cluster0.tcvso.mongodb.net/Promarket?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database Connected');
}).catch(err => console.log(err));

const userRoutes = require('./routes/UserRoutes');
app.use(bodyParser.json());
app.use('/api', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}`);
})