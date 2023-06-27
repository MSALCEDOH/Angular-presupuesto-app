import { Component } from '@angular/core';
import { IngresoService} from './ingreso/ingreso.service';
import { EgresoService} from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-presupuesto-app';

  
  ingresos: Ingreso [] = [];
  egresos: Egreso [] = [];
  
  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) { 
    this.ingresos = ingresoService.ingreso;
    this.egresos = egresoService.egreso;
  }

  getSumaIngreso(){
    let ingresoTotal = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;

  }

  // tslint:disable-next-line: typedef
  getSumaEgreso(){
    let egresoTotal = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getSumaTotal(){
    return this.getSumaIngreso() - this.getSumaEgreso();
  }

  getPorcentaje(){
    return this.getSumaIngreso() / this.getSumaEgreso();
  }

}
