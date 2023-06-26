import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-presupuesto-app';

  getSumaTotal(){
    return 0;
  };

  getSumaIngreso(){
    return 0;
  };

  getSumaEgreso(){
    return 0;
  };

}
