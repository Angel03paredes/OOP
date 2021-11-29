class Empleado{
    String _nombre = "";
    int _edad = 0;
    double _salario = 0;
    double PLUS = 200;

  Empleado(nombre,edad,salario){
    this._nombre = nombre;
    this._edad = edad;
    this._salario = salario;
  }

  set setSalario(double salario){
    this._salario = salario;
  }

  @override 
  String toString() {
    return "\nNombre: " + this._nombre +
    "\nEdad: " + this._edad.toString() +
    "\nSalario: " + this._salario.toString();
  }

}