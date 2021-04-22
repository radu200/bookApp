import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchBooks } from '../redux/bookApp/operators';
import BooksPage from '../pages/Books';
import { getSearchKeyValue } from '../utils';

class Book extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  };

  componentDidMount() {
    const pageNum = getSearchKeyValue(this.props.location.search, 'page');
    if (pageNum) {
      this.setState({ currentPage: pageNum });
    };
    this.props.fetchBooks(pageNum ? pageNum : this.state.currentPage);
  };

  onPageChange = (e, pageNum) => {
    this.props.fetchBooks(pageNum);
    this.setState({ currentPage: pageNum });
    this.props.history.push({
      pathname: '/',
      search: `?page=${pageNum}`,
    });
  };

  render() {
    const { totalPages, books, loading } = this.props;
    const { currentPage } = this.state;
    const { onPageChange } = this;
    return <BooksPage currentPage={currentPage} loading={loading} books={books} totalPages={totalPages} onPageChange={onPageChange} />;
  };
};
const mapState = state => ({
  books: state.books.books,
  totalPages: state.books.totalPages,
  loading: state.books.loading
});

export default compose(
  connect(mapState, { fetchBooks }),
)(Book);



Book.propTypes = {
  books: PropTypes.array,
  loading: PropTypes.bool,
  totalPages: PropTypes.number,
  fetchBooks: PropTypes.func,
};