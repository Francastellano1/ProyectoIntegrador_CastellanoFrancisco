import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  proyecto: Proyecto[] = [];

  constructor(private sProyecto: SProyectoService, private tokenService: TokenService) { }

  isLogged = false;  

  ngOnInit(): void {
    this.getDataProject();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataProject(): void {
    this.sProyecto.lista().subscribe(data => {this.proyecto = data})
  }

  onDeletePro(id?: number): void {
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.sProyecto.lista().subscribe(data => {this.proyecto = data});
          alert ("Se elimino correctamente el elemento selecionado.");
        },
        err => {
          alert ("No se puedo eliminar el elemento selecionado.");
        }
        )
      }
    }
  }
