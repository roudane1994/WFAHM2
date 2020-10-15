package ma.beit.wfahm.repository;

import ma.beit.wfahm.domain.MagasinUtilisateur;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the MagasinUtilisateur entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MagasinUtilisateurRepository extends JpaRepository<MagasinUtilisateur, Long> {
}
