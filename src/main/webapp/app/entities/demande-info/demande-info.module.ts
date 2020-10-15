import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Wfahm2SharedModule } from 'app/shared/shared.module';
import { DemandeInfoComponent } from './demande-info.component';
import { DemandeInfoDetailComponent } from './demande-info-detail.component';
import { DemandeInfoUpdateComponent } from './demande-info-update.component';
import { DemandeInfoDeleteDialogComponent } from './demande-info-delete-dialog.component';
import { demandeInfoRoute } from './demande-info.route';

@NgModule({
  imports: [Wfahm2SharedModule, RouterModule.forChild(demandeInfoRoute)],
  declarations: [DemandeInfoComponent, DemandeInfoDetailComponent, DemandeInfoUpdateComponent, DemandeInfoDeleteDialogComponent],
  entryComponents: [DemandeInfoDeleteDialogComponent],
})
export class Wfahm2DemandeInfoModule {}
