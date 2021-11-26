public class Empleado {
    
    private String nombre;
    private int edad;
    private double salario;
    public final double PLUS = 300;

    public Empleado(String nombre,int edad){
        this.nombre = nombre;
        this.edad = edad;
        
    }

    public void setSalario(double salario){
        this.salario = salario;
    }

    public String getNombre(){
        return this.nombre;
    }

    public int getEdad(){
        return this.edad;
    }

    public double getSalario(){
        return this.salario;
    }

    @Override
    public String toString(){
        return "Nombre :" + this.nombre + ", edad: \n" + this.edad + ", salario : " + this.salario;
    }


}
