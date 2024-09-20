const express = require ('express');
const cors = require('cors');
const path = require ('path');
const bcrypt = ('bcrypt');
const mongoose = require('mongoose');
const userRoute = require('./modules/users/usersRoute.routes');
const appointmentRoute = require('./modules/appointment/appointment.routes');

require('dotenv').config();

const app = express();
app.use(cors({ origin: 'https://sphare-frontend.vercel.app' }));

//DATABASE CONNECTION
mongoose.connect(process.env.mongo_connection,{})
.then(()=>{
    console.log('database connection successful')
})
.catch(()=>{
    console.log('database connection failed')
});

//MODEL INITIALIZATION
require('../Healthcare/models/userModel');
require('../Healthcare/models/appointmentModel')



//ROUTES
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/',userRoute)
app.use('/home',appointmentRoute)
const port = 'https://healthcare-umber.vercel.app';
app.listen(port, () =>{
      console.log('server running on port:${port}');
}
)

