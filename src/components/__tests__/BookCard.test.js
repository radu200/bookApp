import { render, cleanup } from '@testing-library/react';
import BookCard from '../BookCard';
afterEach(cleanup);

describe("BookCard tests", () => {
    it('should render correctly with given props', () => {
        const data = {
            book_author: ["author"],
            book_pages: 20,
            book_publication_city: "London",
            book_publication_country: "UK",
            book_publication_year: 2021,
            book_title: "title"
        };
        const { asFragment } = render(<BookCard {...data} />);
        expect(asFragment()).toMatchSnapshot();
    });
});