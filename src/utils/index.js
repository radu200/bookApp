export function getSearchKeyValue(searchQuery, key) {
    if (searchQuery && key) {
        const page = new URLSearchParams(searchQuery).get(key);
        const parsedPage = parseInt(page);
        return parsedPage;
    }
    return null;
}