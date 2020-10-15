import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Wfahm2SharedModule } from 'app/shared/shared.module';
import { DemandeComponent } from './demande.component';
import { DemandeDetailComponent } from './demande-detail.component';
import { DemandeUpdateComponent } from './demande-update.component';
import { DemandeDeleteDialogComponent } from './demande-delete-dialog.component';
import { demandeRoute } from './demande.route';

@NgModule({
  imports: [Wfahm2SharedModule, RouterModule.forChild(demandeRoute)],
  declarations: [DemandeComponent, DemandeDetailComponent, DemandeUpdateComponent, DemandeDeleteDialogComponent],
  entryComponents: [DemandeDeleteDialogComponent],
})
export class Wfahm2DemandeModule {}
