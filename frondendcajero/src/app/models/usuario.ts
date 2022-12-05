 export class usuario{
    id: number 
     nombres : String
    documento : String
    correo : String
      saldo: number  
    constructor(id: number,nombres : String,documento :String, correo : String,saldo : number){
        this.id =  id
        this.nombres = nombres
        this.documento = documento
        this.correo = correo
        this.saldo = saldo

    }
}