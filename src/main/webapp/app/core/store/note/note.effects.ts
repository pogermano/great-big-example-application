import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Note } from './note.model';
import { slices } from '../util';
import { RESTService } from '../../services/rest.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class NoteEffects {
    @Effect()
    private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.NOTE, this.dataService);
    @Effect()
    private updateToRemote$ = functions.updateToRemote$(this.actions$, slices.NOTE, this.dataService, this.store);
    @Effect()
    private deleteFromRemote$ = functions.deleteFromRemote$(this.actions$, slices.NOTE, this.dataService, this.store);
    @Effect()
    private addToRemote$ = functions.addToRemote$(this.actions$, slices.NOTE, this.dataService, this.store);

    constructor(
        private store: Store<Note>,
        private actions$: Actions,
        private dataService: RESTService
    ) { }
}
