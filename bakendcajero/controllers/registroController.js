const {encript} = require('../middelwares/encriptPass');

const db = require('../db/config');

const inserUser= async(req,res)=>{
    let {nombres,correo,contraseña,documento} =  await req.body;
    contraseña =  String(contraseña);
    const hash = await encript(contraseña);
    const sql = ` INSERT INTO usuarios (nombres,correo,contraseña,documento,saldo) VALUES ('${nombres}','${correo}','${hash}','${documento}',${0})`;
    db.query(sql,(error,results)=>{
        if(error){
            res.json(error);
        }else{
            res.json('usuario agregado de forma correcta');
        }
    })

  
}

const retiroDinero = async(req,res)=>{
    const {documento}  = await req.params; 
    const valorRetiro =  await req.body.valorRetiro;
    let saldo;
    const getUs = `SELECT documento,saldo from  usuarios WHERE documento = '${documento}'`
    db.query(getUs,(error,results)=>{
        if(error){
            throw error
        }else{
            results.forEach(element => {
                saldo   = element.saldo;
            });
          
           if(saldo < valorRetiro){
            res.json({error: 'saldo insuficiente'})

           }else{
            let saldoActual = saldo -valorRetiro;
          
            const sql = ` UPDATE usuarios SET saldo = ${saldoActual} WHERE documento = '${documento}'`;
            db.query(sql,(error,results)=>{
                if(error){
                    throw error
                }else{
                    res.json('retiro realizado de forma correcta')
                    const date = new Date();
                   

                    const insertMov = ` INSERT INTO movieentos (saldo,fecha,documento,tipoMov) VALUES  (${valorRetiro},'${date.getTime()}','${documento}','retiro')`;
                    db.query(insertMov,(error,results)=>{
                        if(error){
                            throw error
                        }else{
                           console.log('registro de transaccion agregado')
                        }
                    })
                }
            })

           }
        }
    })

 
    
} 

const consignarDinero = async(req,res)=>{
    const {documento}  = await req.params; 
    const valorRetiro =  await req.body.valorRetiro;
    let saldo;
    const getUs = `SELECT documento,saldo from  usuarios WHERE documento = '${documento}'`
    db.query(getUs,(error,results)=>{
        if(error){
            throw error
        }else{
            results.forEach(element => {
                saldo   = element.saldo;
            });
          
            let saldoActual = saldo +valorRetiro;
          
            const sql = ` UPDATE usuarios SET saldo = ${saldoActual} WHERE documento = '${documento}'`;
            db.query(sql,(error,results)=>{
                if(error){
                    throw error
                }else{
                    res.json('consignacion  realizada de forma correcta')
                
                    const date = new Date();
                 
                    let dia = date.toString().substring(7,10)
                    let mes = date.toString().substring(4,7)
                    let anio = date.toString().substring(11,16)
              
                    let fecha = `${dia}/${mes}/${anio}`
                  

                    const insertMov = ` INSERT INTO movieentos (saldo,fecha,documento,tipoMov) VALUES  (${valorRetiro},'${fecha}','${documento}','consignacion')`;
                    db.query(insertMov,(error,results)=>{
                        if(error){
                            throw error
                        }else{
                           console.log('registro de transaccion agregado')
                        }
                    })
                }
            })

           }
        
    })

 
    
} 

module.exports = {
    inserUser,
    retiroDinero,
    consignarDinero
}