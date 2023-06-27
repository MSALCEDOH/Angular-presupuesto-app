import { Egreso } from './egreso.model';

export class EgresoService{

  egreso: Egreso[] = [
    new Egreso('Ropa', 15000),
    new Egreso('Renta Depto', 20000)
  ];

  EliminarEgreso(egreso: Egreso){
    const indice: number = this.egreso.indexOf(egreso);
    this.egreso.splice(indice,1);
  }

  AñadirEgreso(egreso: Egreso){
    this.egreso.push(egreso);
  }

  
}