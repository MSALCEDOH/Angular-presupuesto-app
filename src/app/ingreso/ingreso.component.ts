import { Component, Injectable, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

export class IngresoComponent implements OnInit {

  ingresos:Ingreso [] = [];

  constructor(private ingresoService: IngresoService){

  }

  ngOnInit() {
    this.ingresos = this.ingresoService.ingreso;
  }

  EliminarIngreso(ingreso: Ingreso){
    this.ingresoService.EliminarIngreso(ingreso);
  }
  
}
