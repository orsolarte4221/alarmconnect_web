import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-alarma-tipo',
  templateUrl: './nueva-alarma-tipo.component.html',
  styleUrls: ['./nueva-alarma-tipo.component.scss']
})
export class NuevaAlarmaTipoComponent {

  constructor(private router: Router) {}

  seleccionarTipo(tipo: string) {
    console.log('Tipo de alarma seleccionado:', tipo);
    //TODO: Guardar el tipo de alarma en el servicio de alarma

    this.router.navigate(['/crear-alarma'], { queryParams: { tipo: tipo } });

  }
}
