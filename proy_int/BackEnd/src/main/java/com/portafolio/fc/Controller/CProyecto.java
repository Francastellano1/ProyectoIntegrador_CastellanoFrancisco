package com.portafolio.fc.Controller;

import com.portafolio.fc.Dto.dtoProyecto;
import com.portafolio.fc.Entity.Proyecto;
import com.portafolio.fc.Security.Controller.Mensaje;
import com.portafolio.fc.Service.SProyecto;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Fran
 */
@RestController
@RequestMapping("proyecto")
@CrossOrigin(origins="http://localhost:4200")
public class CProyecto {
    
    @Autowired
    SProyecto sProyecto;
    
    @GetMapping ("/lista")
    public ResponseEntity <List<Proyecto>> list(){
        List<Proyecto> list = sProyecto.list();
        return new ResponseEntity (list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Proyecto> getById(@PathVariable("id") int id){
        if(!sProyecto.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no Existe"), HttpStatus.NOT_FOUND);
        Proyecto proyecto = sProyecto.getOne(id).get();
        return new ResponseEntity(proyecto, HttpStatus.OK);
    }
    
    
    @PostMapping ("/create")
    public ResponseEntity<?> create(@RequestBody dtoProyecto dtopro){
        if(StringUtils.isBlank(dtopro.getNombreP()))
            return new ResponseEntity(new Mensaje("El nombre del proyecto es obligatorio"), HttpStatus.BAD_REQUEST);
        if(sProyecto.existsByNombreP(dtopro.getNombreP()))
            return new ResponseEntity(new Mensaje("El proyecto ingresado ya existe"), HttpStatus.BAD_REQUEST);
        Proyecto proyecto = new Proyecto(dtopro.getImg(), dtopro.getNombreP(),
                                      dtopro.getDescripcionP());
        sProyecto.save(proyecto);
        return new ResponseEntity(new Mensaje("Nuevo proyecto agregado correctamente"), HttpStatus.OK);
        
    }
    
    @PutMapping ("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id")int id, @RequestBody dtoProyecto dtopro){
        if(!sProyecto.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no Existe"),HttpStatus.BAD_REQUEST);
        if(sProyecto.existsByNombreP(dtopro.getNombreP())
            && 
           sProyecto.getByNombreP(dtopro.getNombreP()).get().getId() !=id)
                return new ResponseEntity(new Mensaje("Ese Proyecto ya existe"),HttpStatus.BAD_REQUEST);
        if(StringUtils.isBlank(dtopro.getNombreP()))
            return new ResponseEntity(new Mensaje("El Nombre del Proyecto es obligatorio"), HttpStatus.BAD_REQUEST);
        Proyecto proyecto = sProyecto.getOne(id).get();
        proyecto.setNombreP(dtopro.getNombreP());
        proyecto.setDescripcionP(dtopro.getDescripcionP());
        proyecto.setImg(dtopro.getImg());
            sProyecto.save(proyecto);
            return new ResponseEntity(new Mensaje("Proyecto Actualizado Correctamente"), HttpStatus.OK);
    }
    
    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!sProyecto.existsById(id))
            return new ResponseEntity(new Mensaje("El ID no Existe"),HttpStatus.BAD_REQUEST);
        sProyecto.delete(id);
            return new ResponseEntity(new Mensaje("Proyecto Eliminado"), HttpStatus.OK);
    }
}
