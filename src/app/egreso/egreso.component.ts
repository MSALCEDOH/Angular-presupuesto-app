import { Component } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent {

  
  egresos:Egreso [] = [];

  constructor(private egresoService: EgresoService){

  }

  ngOnInit() {
    this.egresos = this.egresoService.egreso;
  }

  EliminarEgreso(egreso: Egreso){
    this.egresoService.EliminarEgreso(egreso);
  }
  

}
