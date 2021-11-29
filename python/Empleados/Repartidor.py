from Empleados import Empleados


class Repartidor(Empleados):
    __zona = ""

    def __init__(self,nombre,edad,salario,zona):
        if edad < 25 and str(zona).lower() == "zona 3":
            salario = super().PLUS + salario
        super().__init__(nombre,edad,salario)
        self.__zona = zona

    def __str__(self):
        return super(Repartidor,self).__str__()  + "\nZona: " + self.__zona


