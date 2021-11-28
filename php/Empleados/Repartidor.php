<?php

  

class Repartidor extends Empleados{

    private $zona;

    function __construct($nombre,$edad,$salario,$zona){
        if($edad < 25 && strtolower($zona) == "zona 3"){
            $salario = $salario + $this->PLUS;
        }
        parent::__construct($nombre,$edad,$salario);
        $this->zona = $zona;
    }

    function getEmpleado(){
        return  parent::getEmpleado() . "\nZona: " . $this->zona;
    }


}