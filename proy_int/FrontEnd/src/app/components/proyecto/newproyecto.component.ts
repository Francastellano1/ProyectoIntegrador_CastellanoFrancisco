import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {

    img!: string;
    nombreP!: string;
    descripcionP!: string;

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void {
    const pro = new Proyecto(this.img, this.nombreP, this.descripcionP);
    console.log(Proyecto);
    this.sProyecto.save(pro).subscribe(data=>{
      alert("Se agrego un nuevo proyecto correctamente");
      this.router.navigate(['']);
    }, err=>{
      alert("La creación falló");
      this.router.navigate(['']);
    });                                  
  }

  volver(){
    this.router.navigate(['/'])
  }

}
