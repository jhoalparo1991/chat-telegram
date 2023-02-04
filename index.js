const app = require('./src/app');


app.listen(app.get('PORT'),()=>{
    console.log(`Server running in http://localhost:${app.get('PORT')}`);
})