import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmListComponent } from './pages/alarm-list/alarm-list.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NuevaAlarmaTipoComponent } from './pages/nueva-alarma-tipo/nueva-alarma-tipo.component';

const routes: Routes = [
  { path: '', redirectTo: 'alarms', pathMatch: 'full' }, // Redirige la raíz a /alarms
  { path: '', component: MainLayoutComponent, children: [
      { path: 'alarms', component: AlarmListComponent },
      { path: 'nueva-alarma-tipo', component: NuevaAlarmaTipoComponent } ,
  ]},
  { path: '**', redirectTo: 'alarms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
