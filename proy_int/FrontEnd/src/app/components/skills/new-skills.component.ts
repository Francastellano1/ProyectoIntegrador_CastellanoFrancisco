import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
    imgSkill!: string;
    nombreS!: string;
    progress!: number;

  constructor(private sSkill: SSkillService, private router: Router) { }

  ngOnInit(): void {}

  onNewSkill(): void {
    const ski = new Skill(this.imgSkill, this.nombreS, this.progress);
    console.log(Skill);
    this.sSkill.save(ski).subscribe(data=>{
      alert("Se agrego una nueva habilidad correctamente");
      this.router.navigate(['']);
    }, err=>{
      alert("La creación Falló");
      this.router.navigate(['']);
    });                                  
  }

  volver(){
    this.router.navigate(['/'])
  }

}
