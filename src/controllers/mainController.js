const {validationResult} = require('express-validator');




const controller = {
    index: function(req, res){
        res.render('index');
    },
    admin: function(req, res){
        res.send('Hola Admin: ' + req.query.user);
    },
    formShow: (req,res)=>{

        res.render('form')
    },
    formSubmit: (req, res)=>{
        const errors = validationResult(req)
        if(errors.isEmpty() == true){
            let userData = req.body
            console.log(userData)
            res.render('form', {userData})
        }else{
            console.log(errors.array())
            res.render('form', {errors: errors.array()})
        }

    }
};

module.exports = controller
