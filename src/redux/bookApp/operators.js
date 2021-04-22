import * as actions from './actions';
import { getBooks } from '../../api/';

export const fetchBooks = (pageNum) => async (dispatch) => {
    try {
        dispatch(actions.requestBooks);
        const res = await getBooks(pageNum);
        dispatch(actions.receiveBooks(res.data));
    } catch (err) {
        dispatch(actions.failureBooks());
    }
};








