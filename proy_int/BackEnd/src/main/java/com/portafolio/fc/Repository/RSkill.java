package com.portafolio.fc.Repository;

import com.portafolio.fc.Entity.Skill;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Fran
 */
public interface RSkill extends JpaRepository<Skill, Integer> {
    public  Optional<Skill> findByNombreS(String nombreS);
    
    public boolean existsByNombreS(String nombreS);
}
