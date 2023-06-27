import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  
  @Input() SumaTotal: number;
  @Input() SumaIngreso: number;
  @Input() SumaEgreso: number;
  @Input() Porcentaje: number;

  ngOnInit(): void {
  }


}
