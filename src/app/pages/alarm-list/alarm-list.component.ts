import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.scss']
})
export class AlarmListComponent implements OnInit {
  contenido: string = '';

  displayedColumns: string[] = ['priority','avatar', 'name', 'description', 'time', 'actions'];
  alarmsToday = new MatTableDataSource([
    {name: 'Alarma Personal', avatar: 'assets/pedro.jpeg', description: 'Sacar a Yuya', time: '7:00am', priority: 'Baja', owner: 'Pedro' },
    {name: 'Mamá', avatar: 'assets/mama.jpeg',  description: 'Tomar Medicamentos', time: '8:00am', priority: 'Alta', owner: 'Mamá' },
    {name: 'Alarma Personal', avatar: 'assets/pedro.jpeg', description: 'Rebajas Librería', time: '7:00am', priority: 'Baja', owner: 'Pedro' },
  ]);

  alarmsTomorrow = new MatTableDataSource([
    { name: 'Alarma Personal', avatar: 'assets/pedro.jpeg',  description: 'Sacar a Yuya', time: '7:00am', priority: 'Baja', owner: 'Pedro' },
    { name: 'Mamá', avatar: 'assets/mama.jpeg',  description: 'Tomar Medicamentos', time: '8:00am', priority: 'Alta', owner: 'Mamá' },
  ]);

  alarmsCommingSoon = new MatTableDataSource([
    { name: 'Alarma Personal',avatar: 'assets/pedro.jpeg',  description: 'Sacar a Yuya', time: 'marzo 16,7:00am', priority: 'Baja', owner: 'Pedro' }
  ]);


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.contenido = params['contenido'] || 'vacio';
    });
  }
}
