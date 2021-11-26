const Empleado =require('./Empleado');

module.exports = class Repartidor extends Empleado{

    zona;
    constructor(nombre,edad,salario,zona) {
        super(nombre,edad);
        if(edad < 25 && zona =="zona 3")
            this.salario = salario + this.PLUS;
        else
        this.salario = salario;
        this.zona = zona;
    }

    getRepartidor(){
        return "Nombre: " + this.nombre +
        "\nEdad: " + this.edad + 
        "\nSalario: " + this.salario + 
        "\nZona: " + this.zona ;
    }

}


