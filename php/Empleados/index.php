<?php
require("./Empleados.php");
require("./Repartidor.php");
require("./Comercial.php");
$repartidor = new Repartidor("Jesus",24,1000,"Zona 2");
echo $repartidor->getEmpleado();
$comercial = new Comercial("Angel",31,1000,300);
echo $comercial->getEmpleado();
