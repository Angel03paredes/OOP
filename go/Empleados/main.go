package main

import (
	"fmt"
	"strconv"
	"strings"
)

var (
	PLUS = 200
)

func main() {
	comercial := Comercial{200, Empleados{"Angel", 22, 100}}
	repartidor := Repartidor{"ZoNa 3", Empleados{"Jesus", 22, 1000}}
	getComercial(&comercial)
	getRepartidor(&repartidor)
}

func getComercial(comercial *Comercial) {
	comercial.salario = comercial.salario + comercial.comision
	if comercial.edad > 30 && comercial.comision > 200 {
		comercial.salario = comercial.salario + float32(PLUS)
	}
	fmt.Println("\nNombre: " + comercial.nombre +
		"\nEdad: " + strconv.Itoa(comercial.edad) +
		"\nSalario: " + fmt.Sprintf("%f", comercial.salario) +
		"\nComision: " + fmt.Sprintf("%f", comercial.comision))
}

func getRepartidor(repartidor *Repartidor) {
	if repartidor.edad < 25 && strings.ToLower(repartidor.zona) == "zona 3" {
		repartidor.salario = repartidor.salario + float32(PLUS)
	}
	fmt.Println("\nNombre: " + repartidor.nombre +
		"\nEdad: " + strconv.Itoa(repartidor.edad) +
		"\nSalario: " + fmt.Sprintf("%f", repartidor.salario) +
		"\nZona: " + repartidor.zona)
}
