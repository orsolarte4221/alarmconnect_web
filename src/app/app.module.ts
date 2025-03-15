import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioButton } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AgregarNotaVozComponent } from './pages/agregar-nota-voz/agregar-nota-voz.component';
import { AlarmListComponent } from './pages/alarm-list/alarm-list.component';
import { CrearAlarmaComponent } from './pages/crear-alarma/crear-alarma.component';
import { NuevaAlarmaTipoComponent } from './pages/nueva-alarma-tipo/nueva-alarma-tipo.component';
import { SelectContactComponent } from './pages/select-contact/select-contact.component';
import { VolumenComponent } from './pages/volumen/volumen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AlarmListComponent,
    NuevaAlarmaTipoComponent,
    CrearAlarmaComponent,
    SelectContactComponent,
    AgregarNotaVozComponent,
    VolumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTableModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatRadioButton,
    MatSliderModule,
    MatCheckboxModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
