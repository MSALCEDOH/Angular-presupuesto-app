import { Component, OnInit } from '@angular/core';
import { IngresoService} from '../ingreso/ingreso.service';
import { EgresoService} from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  

  tipo:string = "ing";
  descripcionInput: string = "";
  valorInput: number = 0;

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) { 

  }


  ngOnInit(): void {
  }

  CambiarTipoOperacion(event){
    this.tipo = event.target.value;
  }

  AgregarIngEg(){
    if (this.tipo == "ing"){
        this.ingresoService.AñadirIngreso(new Ingreso(this.descripcionInput,this.valorInput));
    }
    else{
        this.egresoService.AñadirEgreso(new Egreso(this.descripcionInput,this.valorInput));
    }
  }



}
