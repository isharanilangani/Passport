const express = require('express');
const router = express.Router();

//login
router.get('/login', (req, res) => res.render('login'));

//register
router.get('/register', (req, res) => res.render('register'));


//register handle
router.post('/register', (req, res) => {
    const {name,email,password,password2} = req.body;
    let errors = [];

    //check required field
    if(!name || !email || !password || !password2){
        errors.push({msg:'Please fill in all field'});
    }

    //check password match
    if(password !== password2){
        errors.push({msg:'password do not match'});
    }

    //check pass length
    if(password.length<6){
        errors.push({msg:'password should be at least 6 charachters'});
    }

    if(errors.length >0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
    }else{
        res.send('pass');
    }
});

module.exports = router;
