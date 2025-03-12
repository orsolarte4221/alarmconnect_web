import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmListComponent } from './pages/alarm-list/alarm-list.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: 'alarms', component: AlarmListComponent },
  ]},
  { path: '**', redirectTo: 'alarms' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
