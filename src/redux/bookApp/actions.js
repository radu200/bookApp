import * as types from './constants';


export const requestBooks = () => {
    return {
        type: types.REQUEST_BOOKS
    };
};

export const receiveBooks = data => {
    return {
        type: types.RECEIVE_BOOKS,
        data
    };
};

export const failureBooks = () => {
    return {
        type: types.FAILURE_BOOKS,
    };
};





