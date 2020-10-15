import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'fournisseur',
        loadChildren: () => import('./fournisseur/fournisseur.module').then(m => m.Wfahm2FournisseurModule),
      },
      {
        path: 'demande',
        loadChildren: () => import('./demande/demande.module').then(m => m.Wfahm2DemandeModule),
      },
      {
        path: 'demande-info',
        loadChildren: () => import('./demande-info/demande-info.module').then(m => m.Wfahm2DemandeInfoModule),
      },
      {
        path: 'piece-joindre',
        loadChildren: () => import('./piece-joindre/piece-joindre.module').then(m => m.Wfahm2PieceJoindreModule),
      },
      {
        path: 'magasin-utilisateur',
        loadChildren: () => import('./magasin-utilisateur/magasin-utilisateur.module').then(m => m.Wfahm2MagasinUtilisateurModule),
      },
      {
        path: 'magasin',
        loadChildren: () => import('./magasin/magasin.module').then(m => m.Wfahm2MagasinModule),
      },
      {
        path: 'objet',
        loadChildren: () => import('./objet/objet.module').then(m => m.Wfahm2ObjetModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class Wfahm2EntityModule {}
