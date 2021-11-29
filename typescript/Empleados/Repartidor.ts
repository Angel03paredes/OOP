import Empelados from "./Empleados";

export default class Repartidor extends Empelados{
    private zona:string

    constructor(nombre:string,edad:Number,salario:number,zona:string){
        
        super(nombre,edad,salario);
        if(edad < 25 && zona.toLowerCase() == "zona 3"){
            this.setSalario(salario + this.PLUS) 
         }
        this.zona = zona
    }

    

}