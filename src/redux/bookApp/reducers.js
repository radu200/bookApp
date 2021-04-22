import * as types from './constants';

const initialState = {
    books: [],
    totalPages: 0,
    loading: false,
    error: false,

};
export const books = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUEST_BOOKS:
            return { ...state, loading: true };
        case types.RECEIVE_BOOKS:
            const { count, books } = action.data;
            return { ...state, loading: false, totalPages: count, books: books };
        case types.FAILURE_BOOKS:
            return { ...state, loading: false, error: true, };
        default:
            return state;
    }
};



