import { instanceAPI } from "./Conf";

export const getBooks = async (page) => {
    const endPoint = '/api/books';
    const itemPerPa = 15;
    const res = await instanceAPI.post(endPoint, { itemPerPa, page });
    return res;
};