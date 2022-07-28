export class Skill{

    id?: number;
    imgSkill: string;
    colorIn: string;
    colorOut: string;
    nombreS: string;
    progress: number;

    constructor (imgSkill: string, nombreS: string, progress: number) {

        this.imgSkill = imgSkill;
        this.nombreS = nombreS;
        this.progress = progress;

    }

}
