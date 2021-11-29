

import Empelados from "./Empleados";

export default class Comercial extends Empelados{
    private comision:number

    constructor(nombre:string,edad:Number,salario:number,comision:number){
        salario = salario + comision
        super(nombre,edad,salario)
        this.comision = comision
        if(edad>30 && comision> 200){
            this.setSalario(salario+this.PLUS)
        }
        

    }
}