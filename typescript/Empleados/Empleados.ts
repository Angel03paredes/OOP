export default class Empelados{

    private nombre:string

    private edad:Number

    private salario:Number

    public  PLUS:number = 200

    constructor(nombre:string,edad:Number,salario:Number){
        this.nombre = nombre
        this.edad = edad
        this.salario = salario

    }

    public setSalario(salario:Number){
        this.salario = salario
    }

   


}