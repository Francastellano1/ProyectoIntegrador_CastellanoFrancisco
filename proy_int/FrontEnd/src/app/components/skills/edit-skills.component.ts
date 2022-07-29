import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  ski: Skill = null;

  constructor(private sSkill: SSkillService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data => {
        this.ski = data;
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkill.update(id, this.ski).subscribe(
      data => {
        alert("La modificación se realizo correctamente.");
        this.router.navigate(['']);
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  volver(){
    this.router.navigate(['/'])
  }

}