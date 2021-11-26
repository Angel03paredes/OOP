const Empleado = require('./Empleado');

module.exports = class Comercial extends Empleado{

    zona;
    constructor(nombre,edad,salario,comision) {
        super(nombre,edad);
        if(edad < 25 && comision > 200)
            this.salario = salario + this.PLUS + comision;
        else
        this.salario = salario + comision;
        this.comision = comision;
    }

    getComercial(){
        return "Nombre: " + this.nombre +
        "\nEdad: " + this.edad + 
        "\nSalario: " + this.salario + 
        "\nComision: " + this.comision ;
    }

}