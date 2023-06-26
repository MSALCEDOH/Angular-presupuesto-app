import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  
  @Input() SumaTotal: number = 0;
  @Input() SumaIngreso: number = 0;
  @Input() SumaEgreso: number = 0;
  
  constructor(){}

  ngOnInit(): void {
  }


}
