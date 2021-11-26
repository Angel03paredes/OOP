public class Comercial extends Empleado{
    private double comision;

    public Comercial(String nombre,int edad,double comision){
        super(nombre,edad);
        if(edad > 30 && comision > 200){
            this.setSalario(comision + this.PLUS);
        }else{
            this.setSalario(comision);
        }
        this.comision = comision;
    }

    @Override
    public String toString(){
        return "\nNombre: " + this.getNombre() +
        "\nEdad: " + this.getEdad() + 
        "\nComision: " + this.comision + 
        "\nSalario: " + this.getSalario();
    }

}
