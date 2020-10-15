package ma.beit.wfahm.repository;

import ma.beit.wfahm.domain.PieceJoindre;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the PieceJoindre entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PieceJoindreRepository extends JpaRepository<PieceJoindre, Long> {
}
