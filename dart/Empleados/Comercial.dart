import "Empleado.dart";

class Comercial extends Empleado{

  // ignore: unused_field
  double? _comision;

  Comercial(nombre,edad,salario,comision):super(nombre,edad,salario){
    this._comision = comision;
    if(edad > 30 && comision > 200){
      this.setSalario = salario + comision + this.PLUS;
    }else{
      this.setSalario = salario + comision;
    }
  }

  @override
  String toString() {
    return super.toString() + "\nComision: " + this._comision.toString();
  }

}

