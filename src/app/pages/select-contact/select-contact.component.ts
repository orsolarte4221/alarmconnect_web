import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-contact',
  templateUrl: './select-contact.component.html',
  styleUrls: ['./select-contact.component.scss'],
})
export class SelectContactComponent {
  columnsToDisplay = ['avatar', 'nombre', 'celular', 'select'];

  contactsArray = [
    { avatar: 'assets/pedro.jpeg', nombre: 'Juan Perez', celular: '1234567890' },
    { avatar: 'assets/pedro.jpeg', nombre: 'Maria Gomez', celular: '0987654321' },
    { avatar: 'assets/pedro.jpeg', nombre: 'Carlos Sanchez', celular: '1122334455' },
    { avatar: 'assets/pedro.jpeg', nombre: 'Ana Martinez', celular: '2233445566' },
    { avatar: 'assets/pedro.jpeg', nombre: 'Luis Rodriguez', celular: '3344556677' },
    { avatar: 'assets/pedro.jpeg', nombre: 'Sofia Fernandez', celular: '4455667788' },
    { avatar: 'assets/pedro.jpeg', nombre: 'Miguel Torres', celular: '5566778899' }
  ];

  constructor(private router: Router) {}

  navigateToCrearAlarma() {
    this.router.navigate(['/crear-alarma']);
  }
}
