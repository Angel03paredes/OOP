using System;
namespace Empleados {

    class Empleado{

        private string nombre;
        private int edad;
        private double salario;

        public readonly double PLUS = 200;

        public override string ToString()
        {
            return "\nNombre: " + this.nombre +
            "\nEdad : " + this.edad + 
            "\nSalario: " + this.salario;
        }
        public Empleado(string nombre,int edad,double salario ){
            this.nombre = nombre;
            this.edad = edad;
            this.salario = salario;
        }
        public string Nombre {get
            {
                return nombre;
            }
        set
            {
                nombre = value;
            }
        }
        public int Edad  {get
            {
                return edad;
            }
        set
            {
                edad = value;
            }
        }

        public double Salario {
            get {
                return salario;
            }
            set{
                salario = value;
            }
        }
    }

}