package com.portafolio.fc.Security.Service;

import com.portafolio.fc.Security.Entity.Rol;
import com.portafolio.fc.Security.Enums.RolNombre;
import com.portafolio.fc.Security.Repository.iRolRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RolService {
    @Autowired
    iRolRepository irolRepository;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return irolRepository.findByRolNombre(rolNombre);
    }
    //metodo para guardar cambios
    public void save(Rol rol) {
        irolRepository.save(rol);
    }
    
}
