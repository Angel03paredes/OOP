public class Repartidor extends Empleado {
    private String zona;

    public Repartidor(String zona,String nombre,int edad,double salario){
        super(nombre,edad);
        if(edad < 25 && zona.toLowerCase() == "zona 3"){
            this.setSalario(salario + this.PLUS); 
        }else{
            this.setSalario(salario); 
        }
        
        this.zona = zona;
    }

    @Override 
    public String toString(){
        return 
         " Zona: " + this.zona +
          "\n Nombre: " + this.getNombre() +
          "\n Edad: " + this.getEdad() +
          "\n Salario: " + this.getSalario();
    }

}
