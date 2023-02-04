const { Router } = require('express');
const Store = require('./Store');
const { success,error } = require('../../middlewares/Response');

const store = new Store;
const router = Router();

router.post('/',async(req,res)=>{
    try {
        
        const { fullname,email,password} = req.body;

        const userData = {
            fullname,
            email,
            password
        };

        const result =  await store.createUser(userData);

        success(req,res,result,"[User Controller -> create user]",201);

    } catch (err) {
        error(req,res,"Internal error server",err.message,500);
    }
});



module.exports = router;


