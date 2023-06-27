import { Ingreso } from './ingreso.model';

export class IngresoService{

  ingreso: Ingreso[] = [
    new Ingreso('Salario', 200000),
    new Ingreso('venta Coche', 600000)
  ];

  EliminarIngreso(ingreso: Ingreso){
    const indice: number = this.ingreso.indexOf(ingreso);
    this.ingreso.splice(indice,1);
  }

  AñadirIngreso(ingreso: Ingreso){
    this.ingreso.push(ingreso);
  }
}