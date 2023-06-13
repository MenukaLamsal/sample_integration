const express = require('express');

const router = express.Router();

const mongoType = require('mongoose').Types;

const LoginPost = require('../Models/LoginPost.js');

router.get('/login', async(req, res) => {

    // try {
    //     const userId = req.query.id;
    //     const registerUser = await RegisterPost.findById(userId, 'Email');
    //     res.render('login', { email: registerUser.Email });
    //   } catch (error) {
    //     console.error('Error fetching registered user:', error);
    //     res.status(500).send('Internal Server Error');
    //   }

    res.render('login');
  });

  router.post('/login', async (req, res) => {
    try {
      const formData = req.body;
      const user = await LoginPost.create(formData);
      res.redirect('/login');
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).send('Internal Server Error');
    }
  }); 
  

// routes Define here
// get All data from this API

// router.get('/',(req,res) =>{
//     LoginPost.find((err, doc)=> {
//         if(err){
//             console.log('Error Occurred while fetching data' +err);
//             res.status(400).send('Internal Error' +err);
//         }else{
//             res.send(doc);
//         }
//     })
// })

//create new post
router.post('/',(req, res) => {
    let post = new LoginPost({
        Email : req.body.Email,
        Password : req.body.Password

    });
    post.save()
        .then(savedPost => {
            res.send(savedPost);
    })
    .catch(err => {
            console.log('Internal Error:' +err);
            res.status(400).send('Internal Error' +err);
    });
});

// get data by id
// router.get('/:id', (req, res) => {
//     if(mongoType.ObjectId.isValid(req.params.id)){
//         LoginPost.findById(req.params.id , (err, doc)=> {
//             if(err){
//                 console.log('Internal Error:' + err);
//                 res.status(400).send('Internal Error:' +err);
//             }else{
//                 res.send(doc);
//             }
//         })
//     }else{
//         res.status(400).send('No record found by this id:' +id);
//     }
// })

// // delete data by id
// router.delete('/:id', (req, res) => {
//     if(mongoType.ObjectId.isValid(req.params.id)){
//         LoginPost.findByIdAndRemove(req.params.id , (err, doc)=> {
//             if(err){
//                 console.log('Internal Error:' + err);
//                 res.status(400).send('Internal Error:' +err);
//             }else{
//                 res.send(doc);
//             }
//         })
//     }else{
//         res.status(400).send('No record found by this id:' +id);
//     }
// })

// update by id
// get data by id
// router.put('/:id', (req, res) => {

//     let post = {
//         Name : req.body.Name,
//         Email : req.body.Email,
//         Address : req.body.Address,
//         Phone : req.body.Phone,
//         Gender : req.body.Gender,
//         Password : req.body.Password,
//         ConfirmPassword : req.body.ConfirmPassword
//     }

//     if(mongoType.ObjectId.isValid(req.params.id)){
//         LoginPost.findByIdAndUpdate(req.params.id ,{$set:post},{new : true}, (err, doc)=> {
//             if(err){
//                 console.log('Internal Error:' + err);
//                 res.status(400).send('Internal Error:' +err);
//             }else{
//                 res.send(doc);
//             }
//         })
//     }else{
//         res.status(400).send('No record found by this id:' ,id)
//     }
// })

module.exports = router;