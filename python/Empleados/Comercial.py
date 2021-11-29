from Empleados import Empleados

class Comercial(Empleados):

    __comision = 0


    def __init__(self, nombre, edad, salario,comision):
        salario = salario + comision
        if edad>30 and comision > 200:
            salario = salario + super().PLUS
        super().__init__(nombre, edad, salario)
        self.__comision = comision
    
    def __str__(self):
        return super().__str__() + "\nComision: " + str(self.__comision)