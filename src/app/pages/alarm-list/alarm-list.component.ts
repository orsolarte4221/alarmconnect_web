import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.scss']
})
export class AlarmListComponent {
  alarms = [
    { name: 'Tomar Medicamentos', time: new Date(), priority: 'alta' },
    { name: 'Cita Odontológica', time: new Date(), priority: 'media' }
  ];

  editAlarm(alarm: any) {
    console.log('Editando alarma', alarm);
  }

  deleteAlarm(alarm: any) {
    console.log('Eliminando alarma', alarm);
  }
}
