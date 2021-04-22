import { books } from '../reducers';
import * as types from '../constants';

describe('Books reducer', () => {

    const initialState = {
        books: [],
        totalPages: 0,
        loading: false,
        error: false,
    };

    it('should provide the initial state,', () => {
        expect(books(undefined, {})).toEqual(initialState);
    });

    it('should handle REQUEST_BOOKS action', () => {

        const state = {
            loading: true,
        };

        expect(books({}, { type: types.REQUEST_BOOKS })).toEqual(state);
    });

    it('should handle RECEIVE_BOOKS action', () => {
        const data = { books: [{ id: 1, book_author: "J. K. Rowling", book_title: "Harry Potter" }], count: 1000 };
        const state = {
            books: data.books,
            totalPages: data.count,
            loading: false,
        };

        expect(books({}, { type: types.RECEIVE_BOOKS, data: data })).toEqual(state);
    });


    it('should handle FAILURE_BOOKS action', () => {
        const state = {
            loading: false,
            error: true
        };
        expect(books({}, { type: types.FAILURE_BOOKS, error: true, loading: false })).toEqual(state);
    });
});