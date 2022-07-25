package com.portafolio.fc.Interface;

import com.portafolio.fc.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traigo a una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona) ;
    
    //Eliminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id) ;
    
    //Buscar una persona por ID
    public Persona findPersona(Long id) ;
}
