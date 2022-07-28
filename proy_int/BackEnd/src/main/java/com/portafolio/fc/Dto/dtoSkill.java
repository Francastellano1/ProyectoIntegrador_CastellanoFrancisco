/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portafolio.fc.Dto;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author Fran
 */
public class dtoSkill {
    private String imgSkill;
    @NotBlank
    private String nombreS;
    @NotBlank
    private int progress;
    
    //Constructores

    public dtoSkill() {
    }

    public dtoSkill(String imgSkill,String nombreS, int progress) {
        this.imgSkill = imgSkill;
        this.nombreS = nombreS;
        this.progress = progress;
    }
    //Getters && Setters

    public String getImgSkill() {
        return imgSkill;
    }

    public void setImgSkill(String imgSkill) {
        this.imgSkill = imgSkill;
    }

    public String getNombreS() {
        return nombreS;
    }

    public void setNombreS(String nombreS) {
        this.nombreS = nombreS;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }
    
}
