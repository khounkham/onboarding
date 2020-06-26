const express = require('express');
const connectDB=require ('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware

app.use(express.json({extended: false}));


// Define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/companyprofile', require('./routes/api/companyprofile'));
app.use('/api/projectprofile', require('./routes/api/projectprofile'));
app.use('/api/onboarder', require('./routes/api/onboarder'));
//app.use('/api/managementtool', require('./routes/api/managementtool'));

// Serve static assets in production

if (process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));

