const db = require('../db/config');

const getMovi= async(req,res)=>{
    const sql = 'SELECT * FROM movieentos';
    db.query(sql,(error,results)=>{
        if(error){
            res.json({error: error})
        }else{
            res.json(results);

        }
    })

}


