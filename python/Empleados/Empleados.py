class Empleados :

    __nombre = ""
    __edad = 0
    __salario = 0
    PLUS = 200

    def __init__(self,nombre,edad,salario):
        self.__nombre = nombre
        self.__edad = edad
        self.__salario = salario

    def __str__(self):
        return "\nNombre: " + self.__nombre + "\nEdad: " + str(self.__edad) + "\nSalario: " + str(self.__salario)