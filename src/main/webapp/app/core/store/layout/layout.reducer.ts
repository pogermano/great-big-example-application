import { SliceAction } from '../slice/slice.actions';
import { Layout, initialLayout } from './layout.model';
import * as functions from '../slice/slice.functions';
import { typeFor, slices } from '../util';
import { actions } from '../slice/slice.actions';
import * as SliceActions from '../slice/slice.actions';
import { Contact } from '../contact/contact.model';

export function reducer(state: Layout = initialLayout(), action: SliceAction): Layout {

    switch (action.type) {
        case typeFor(slices.LAYOUT, actions.UPDATE):
            return functions.update(state, action);
        case typeFor(slices.CONTACT, actions.LOAD):
            // TODO fix this. This action type doesn't go through the reducers because it's in the startsWith of an effect
            return functions.update(state, new SliceActions.Update(slices.LAYOUT, ['msg'], 'Loading contacts...'));
        case 'TALK_WATCHED': {
            const watched = { ...state.talksPage.watched };
            watched[action.payload.id] = true;
            return { ...state, talksPage: { ...state.talksPage, watched } };
        }
        default:
            return state;
    }
}

export const getBerniePageState = (state: Layout) => state.berniePage;

export const getBernieSearchTerm = (state: Layout) => state.berniePage.bernieSearchTerm;

export const getMsg = (state: Layout) => state.msg;

export const getHeroSearchTerm = (state: Layout) => state.heroesDashboardPage.heroSearchTerm;

export const getQuery = (state: Layout) => state.booksPage.query;

export const getTalksPageFilters = (state: Layout) => state.talksPage.filters;
