import { render, screen, cleanup } from '@testing-library/react';
import Pagination from '../Pagination';

afterEach(cleanup);

describe("Pagination tests", () => {
    test('should render correctly with count props', () => {
        render(<Pagination count={3} />);
        const element = screen.getByTestId("pagination-test");
        expect(element).toHaveTextContent('123');
    });
});