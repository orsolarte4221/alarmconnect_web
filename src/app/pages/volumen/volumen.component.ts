import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volumen',
  templateUrl: './volumen.component.html',
  styleUrl: './volumen.component.scss'
})
export class VolumenComponent {
  sliderValue: number = 50; // Add this line
  vibrate: number = 50; // Add this line

  constructor(private router: Router) {}
  navigateToCrearAlarma() {
    this.router.navigate(['/crear-alarma']);
  }

}
