using System;

namespace Empleados
{
    class Program
    {
        static void Main(string[] args)
        {
            var repartidor = new Repartidor("James",20,1000,"Zona 3");
            Console.WriteLine(repartidor.ToString());
            Comercial comercial = new Comercial("Jesus",32,1400,150);
            Console.WriteLine(comercial.ToString());
        }
    }
}
