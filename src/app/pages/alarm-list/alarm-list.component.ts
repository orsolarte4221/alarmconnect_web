import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.scss']
})
export class AlarmListComponent implements OnInit {
  contenido: string = '';
  mensaje: string | null = '';

  displayedColumns: string[] = ['priority', 'avatar', 'name', 'description', 'time', 'actions'];

  alarmsToday = new MatTableDataSource([
    { name: 'Alarma Personal', avatar: 'assets/pedro.jpeg', description: 'Sacar a Yuya', time: '7:00am', priority: 'Baja', owner: 'Pedro' },
    { name: 'Mamá', avatar: 'assets/mama.jpeg', description: 'Tomar Medicamentos', time: '8:00am', priority: 'Alta', owner: 'Mamá' },
    { name: 'Alarma Personal', avatar: 'assets/pedro.jpeg', description: 'Rebajas Librería', time: '7:00am', priority: 'Media', owner: 'Pedro' },
  ]);

  alarmsTomorrow = new MatTableDataSource([
    { name: 'Alarma Personal', avatar: 'assets/pedro.jpeg', description: 'Sacar a Yuya', time: '7:00am', priority: 'Baja', owner: 'Pedro' },
    { name: 'Mamá', avatar: 'assets/mama.jpeg', description: 'Tomar Medicamentos', time: '8:00am', priority: 'Alta', owner: 'Mamá' },
  ]);

  alarmsCommingSoon = new MatTableDataSource([
    { name: 'Alarma Personal', avatar: 'assets/pedro.jpeg', description: 'Sacar a Yuya', time: 'marzo 16,7:00am', priority: 'Baja', owner: 'Pedro' }
  ]);

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.contenido = params['contenido'] || 'vacio';

      // Si el mensaje es de éxito, mostrar el `MatSnackBar`
      if (params['mensaje'] === 'exito') {
        this.mostrarNotificacion('Exito! La alarma se creó exitosamente!', 'Cerrar');
      }
    });
  }

  mostrarNotificacion(mensaje: string, accion: string) {
    const config = new MatSnackBarConfig();
    config.duration = 3000; //  Duración de 3 segundos
    config.panelClass = ['custom-snackbar']; //  Aplicar clase personalizada
    config.horizontalPosition = 'end'; //  Lo moverá a la derecha
    config.verticalPosition = 'top'; // Para que siga debajo del header

    this.snackBar.open(mensaje, accion, config);
  }
}
