import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill[] = [];
 
  constructor(public sSkill: SSkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getDataSkill();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataSkill(): void {
    this.sSkill.lista().subscribe(data => {this.skill = data});
  }

  onDeleteSki(id?: number): void {
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data => {
          this.sSkill.lista().subscribe(data => {this.skill = data});
          alert ("Se elimino correctamente el elemento selecionado.");
        },
        err => {
          alert ("No se puedo eliminar el elemento selecionado.");
        }
        )
      }
    }

}
