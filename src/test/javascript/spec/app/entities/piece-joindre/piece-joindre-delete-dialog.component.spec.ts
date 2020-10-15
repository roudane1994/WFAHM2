import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Wfahm2TestModule } from '../../../test.module';
import { MockEventManager } from '../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { PieceJoindreDeleteDialogComponent } from 'app/entities/piece-joindre/piece-joindre-delete-dialog.component';
import { PieceJoindreService } from 'app/entities/piece-joindre/piece-joindre.service';

describe('Component Tests', () => {
  describe('PieceJoindre Management Delete Component', () => {
    let comp: PieceJoindreDeleteDialogComponent;
    let fixture: ComponentFixture<PieceJoindreDeleteDialogComponent>;
    let service: PieceJoindreService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Wfahm2TestModule],
        declarations: [PieceJoindreDeleteDialogComponent],
      })
        .overrideTemplate(PieceJoindreDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PieceJoindreDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PieceJoindreService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
