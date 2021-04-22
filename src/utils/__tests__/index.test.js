import { getSearchKeyValue } from '../';

describe('Search key value fnction', () => {
    it('should work correctly with given params', () => {
        const query = "?page=2";
        const key = "page";
        const output = 2;
        expect(getSearchKeyValue(query, key)).toEqual(output);
    });

    it('should be falsy with undefined', () => {
        const query = undefined;
        const key = undefined;
        expect(getSearchKeyValue(query, key)).toBeFalsy();
    });
});