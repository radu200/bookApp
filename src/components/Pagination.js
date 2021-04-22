import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';


export default function BasicPagination({ count, currentPage, onChange }) {
    return (
        <Pagination data-testid="pagination-test" count={count} page={currentPage} onChange={onChange} variant="outlined" />
    );
};
BasicPagination.propTypes = {
    onChange: PropTypes.func,
    count: PropTypes.number
};