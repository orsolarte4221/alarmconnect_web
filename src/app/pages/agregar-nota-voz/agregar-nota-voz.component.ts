import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-agregar-nota-voz',
  templateUrl: './agregar-nota-voz.component.html',
  styleUrls: ['./agregar-nota-voz.component.scss']
})
export class AgregarNotaVozComponent implements OnInit {
  private waveSurfer: WaveSurfer | undefined;
  public audioLoaded = false;

  constructor(private router: Router) {}
  ngOnInit() {
  }

  playAudio() {
    this.waveSurfer?.playPause();
  }

  recordAudio() {
    this.audioLoaded = true;
    setTimeout(() => {
    this.waveSurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#e3e1e9',
      progressColor: '#555992'
    });

    this.waveSurfer.load('/assets/audio_sample.m4a');
        
    }, 500);
  }

  clearAudio() {
    this.audioLoaded = false;
  }
  navigateToCrearAlarma() {
    this.router.navigate(['/crear-alarma']);
  }

}
