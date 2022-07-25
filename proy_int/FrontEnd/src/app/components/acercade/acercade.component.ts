import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  /* Llamamos al servicio desde el componente. Inicializamos el objeto */
  persona: persona = new persona("","",""); /* parametros que se van a pasar para el objeto persona */

  /* el constructor va a llamar al servicio */
  constructor(public personaService: PersonaService) { }

  /* el subscribe es un metodo que ve siempre que hay un cambio en el Observable */
  /* lo que este en persona se va a guardar en data */
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

}
