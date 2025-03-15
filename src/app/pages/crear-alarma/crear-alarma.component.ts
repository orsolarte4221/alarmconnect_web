import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.scss']
})
export class CrearAlarmaComponent implements OnInit {

  fechaActual: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.setFechaActual();
  }

  setFechaActual() {
    const ahora = new Date();
    const offset = ahora.getTimezoneOffset() * 60000; //  Ajuste de zona horaria
    const fechaLocal = new Date(ahora.getTime() - offset).toISOString().slice(0, 16);
    this.fechaActual = fechaLocal;
  }

  guardarYRedirigir() {
    console.log('Guardando la alarma...');

    setTimeout(() => {
      console.log('Alarma guardada exitosamente.');
      this.router.navigate(['/alarms'], { queryParams: { contenido: 'lleno', mensaje: 'exito' } });
    }, 500); // Simula un pequeño delay antes de redirigir
  }

  navigateToContactSelection() {
    this.router.navigate(['/select-contact']);
  }

  navigateToVoiceNote() {
    this.router.navigate(['/agregar-nota-voz']);
  }

}
