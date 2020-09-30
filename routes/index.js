const router = require('express').Router();
const axios = require('axios');
const bodyparser = require('body-parser')

const urlenco = bodyparser.urlencoded({extended:true})

router.get('/entry',(req,res)=>{
    console.log('entry')
    res.render('entry')
});

router.post('/entry',urlenco,(req,res)=>{

    axios.post('http://localhost:3000/',req.body).then(data=>{
        
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
    res.send('Succesfully')
});

module.exports = router;