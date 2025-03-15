import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AgregarNotaVozComponent } from './pages/agregar-nota-voz/agregar-nota-voz.component';
import { AlarmListComponent } from './pages/alarm-list/alarm-list.component';
import { CrearAlarmaComponent } from './pages/crear-alarma/crear-alarma.component';
import { NuevaAlarmaTipoComponent } from './pages/nueva-alarma-tipo/nueva-alarma-tipo.component';
import { SelectContactComponent } from './pages/select-contact/select-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'alarms', pathMatch: 'full' }, // Redirige la raíz a /alarms
  { path: '', component: MainLayoutComponent, children: [
      { path: 'alarms', component: AlarmListComponent },
      { path: 'nueva-alarma-tipo', component: NuevaAlarmaTipoComponent } ,
      { path: 'crear-alarma', component: CrearAlarmaComponent },
      { path: 'select-contact', component: SelectContactComponent },
      { path: 'agregar-nota-voz', component: AgregarNotaVozComponent },
  ]},
  { path: '**', redirectTo: 'alarms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
