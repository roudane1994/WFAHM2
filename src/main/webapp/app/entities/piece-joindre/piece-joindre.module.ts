import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Wfahm2SharedModule } from 'app/shared/shared.module';
import { PieceJoindreComponent } from './piece-joindre.component';
import { PieceJoindreDetailComponent } from './piece-joindre-detail.component';
import { PieceJoindreUpdateComponent } from './piece-joindre-update.component';
import { PieceJoindreDeleteDialogComponent } from './piece-joindre-delete-dialog.component';
import { pieceJoindreRoute } from './piece-joindre.route';

@NgModule({
  imports: [Wfahm2SharedModule, RouterModule.forChild(pieceJoindreRoute)],
  declarations: [PieceJoindreComponent, PieceJoindreDetailComponent, PieceJoindreUpdateComponent, PieceJoindreDeleteDialogComponent],
  entryComponents: [PieceJoindreDeleteDialogComponent],
})
export class Wfahm2PieceJoindreModule {}
