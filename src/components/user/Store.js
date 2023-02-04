const UserModel = require('./Model');


class Store{

    createUser(data){
        return new Promise(async(resolve,reject)=>{
            if(!data){
                reject('Bab request');
                return false;
            }    
            const result = await UserModel.create(data);
            resolve(result);
        });
    }
}


module.exports = Store;