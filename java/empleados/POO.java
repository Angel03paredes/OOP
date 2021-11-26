public class POO {

    public static void main( String args []){
        Repartidor repartidor = new Repartidor("zona 3", "Jesus angel", 22, 100);
        System.out.println(repartidor.toString());
        Comercial comercial = new Comercial("James", 39, 300);
        System.out.println(comercial.toString());
    }

}