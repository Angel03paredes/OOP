namespace Empleados{

    class Repartidor : Empleado{

        private string zona;
        public Repartidor(string name,int edad,double salario,string zona):base(name,edad,salario){
            if(edad <25 && zona.ToLower() == "zona 3"){
                this.Salario =  this.Salario + this.PLUS; 
            }
            this.zona = zona;
        }

        public override string ToString()
        {
            return base.ToString() + "\nZona: " + this.zona;
        }

    }
   
}