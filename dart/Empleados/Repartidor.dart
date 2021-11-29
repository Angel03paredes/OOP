import 'Empleado.dart';

class Repartidor extends Empleado{
  String _zona = "";
  Repartidor(nombre,edad,salario,String zona):super(nombre,edad,salario){
    if(edad>25 && zona.toLowerCase() == "zona 3"){
      this.setSalario = salario + this.PLUS;
    }
   this._zona = zona;
  }

  @override 
  String toString(){
    return super.toString() + "\nZona: " + this._zona;
  }

}