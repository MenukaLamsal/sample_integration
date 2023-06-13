const express = require('express');
const bodyParser = require('body-parser'); // takes and sends data in bson format
const cors = require('cors');   //to connect https request and response
// const axios = require('axios');


const mongoose = require('../DatabaseConn/db.js');

const RegisterPost = require('../Models/RegisterPost.js');

const LoginPost = require('../Models/LoginPost.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));  //url encryption


app.use(bodyParser.json());

const registerroute = require('../Routes/RegisterRoutes.js');
app.use(registerroute);


const loginroute = require('../Routes/LoginRoutes.js');
app.use(loginroute);

//app.use(cors({origin: 'http://127.0.0.1:5500/clz_project'}));


// GET request to fetch users
// axios.get('/API_call/register.ejs')
//   .then(response => {
//     console.log("Data Received",response.data);
//     // Process the retrieved data
//   })
//   .catch(error => {
//     console.error('Failed to fetch data', error);
//   });


//to save data entered in the form to the database

const path = require('path');
// View engine setup to ejs
app.set('views', path.join('D:','API_call','Frontend', 'views'));

app.set('view engine', 'ejs');
 
// With middleware
// app.use('/', function (req, res, next) {
//     res.render('register')
//     next();
// });
 
app.get('/register', (req, res) =>{
   res.render('register');
//    res.redirect('/');
 
   console.log("Render Working")
});

app.get('/login', (req, res) =>{
    

     res.render('login');
     console.log("Render Working")
});



// Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// route to handle form submission
app.post('/register', async(req, res) => {
    const formData = req.body;
    const user = await RegisterPost.create(formData);
    // res.redirect('/');
    res.render('register');
    // console.log(formData); 
});

// app.post('/login', async(req, res) => {
//     try{
//     const formData = req.body;
//     const user = await RegisterPost.create(formData);
//     // res.redirect('/');
//     res.render('login',{id: user._id});
//     }catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).send('Internal Server Error');
//       }
//     // console.log(formData); 
// });

    
app.post('/login', async (req, res) => {
  const formData = req.body;
  const user = await LoginPost.create(formData);
  // res.redirect('/');
  res.render('login');
  });
  

app.listen(3000, (req, res) => {
    console.log('Server is started at port 3000');
});
