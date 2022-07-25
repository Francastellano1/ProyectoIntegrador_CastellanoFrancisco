package com.portafolio.fc.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter; 

/*Persona es una entidad*/
@Getter 
@Setter
@Entity
public class Persona {
    @Id /*el 1er campo va a ser un id, primary key*/
    @GeneratedValue(strategy = GenerationType.IDENTITY) /*el 2do campo va a ser autogenerado automatico*/
    private Long id;
    
    @NotNull /*si o si hay que agregar el nombre*/
    @Size(min = 1, max = 50, message = "No cumple con la longitud") /*hasta 50 caracteres*/
    private String nombre;
    
    @NotNull /*si o si hay que agregar el apellido*/
    @Size(min = 1, max = 50, message = "No cumple con la longitud") 
    private String apellido;
    
    /*@NotNull*/
    @Size(min = 1, max = 50, message = "No cumple con la longitud") 
    private String img;
    
    
}
