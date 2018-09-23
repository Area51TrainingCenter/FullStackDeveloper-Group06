import { Component } from '@angular/core';
import { SeguridadService } from './seguridad.service';
import {FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grupo: FormGroup

  constructor(private seguridad: SeguridadService) {}

  ngOnInit() {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })
  }

  login() {
    this.seguridad.login(this.grupo.getRawValue())
  }
}
