namespace Empleados{
    class Comercial : Empleado{
        private double comision ;

        public Comercial(string nombre,int edad,double salario,double comision):base(nombre,edad,salario){
            this.Salario = this.Salario + comision;
            if(edad > 30 && comision > 200){
                this.Salario = this.Salario + this.PLUS;
            }
            this.comision = comision;
        }

        public override string ToString()
        {
            return base.ToString() + "\nComision: " + this.comision;
        }

    }
}