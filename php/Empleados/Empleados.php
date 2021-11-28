<?php

class Empleados {
    private $nombre;
    private $edad;
    private $salario;
    public $PLUS = 200;


    public function __construct($nombre,$edad,$salario){
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->salario = $salario;
    }

    function getEmpleado(){
        return "\nNombre: " . $this->nombre .
        "\nEdad: " . $this->edad . 
        "\nSalario: " . $this->salario;
    }

}