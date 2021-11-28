<?php



class Comercial extends Empleados{
    private $comision;

    public function __construct($nombre,$edad,$salario,$comision){
        if($edad > 30 && $comision > 200){
            $salario = $salario + $comision + $this->PLUS;
        }else{
            $salario = $salario + $comision;
        }

        parent::__construct($nombre,$edad,$salario);
        $this->comision = $comision;
    }

    public function getEmpleado(){
        return parent::getEmpleado() . "\n Comision: " . $this->comision;
    }

}