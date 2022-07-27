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
public class dtoProyecto {
    private String img;
    @NotBlank
    private String nombreP;
    @NotBlank
    private String descripcionP;
    
    //Constructores

    public dtoProyecto() {
    }

    public dtoProyecto(String img, String nombreP, String descripcionP) {
        this.img = img;
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
    }
    
    //Getters && Setters

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getNombreP() {
        return nombreP;
    }

    public void setNombreP(String nombreP) {
        this.nombreP = nombreP;
    }

    public String getDescripcionP() {
        return descripcionP;
    }

    public void setDescripcionP(String descripcionP) {
        this.descripcionP = descripcionP;
    }
    
}
