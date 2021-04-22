import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from "../components/Pagination";
import BookCard from '../components/BookCard';
import Spinner from '../components/Spinner';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 1200,
    margin: "30px auto 30px auto",
    padding: 15,
  },
  containerBooks: {
    marginBottom: 15
  }
}));

export default function BooksPage({ books, loading, currentPage, totalPages, onPageChange }) {
  const classes = useStyles();
  return (
    loading ? <Spinner /> :
      <div className={classes.root}>
        <Grid className={classes.containerBooks} container mb={2} justify="center" spacing={3}>
          {books.map(b => (
            <Grid key={b.id} item xs={12} sm={6} md={3}>
              <BookCard {...b} />
            </Grid>
          ))}
        </Grid>
        <Pagination count={totalPages} currentPage={currentPage} onChange={onPageChange} />
      </div>
  );
};

BooksPage.propTypes = {
  books: PropTypes.array,
  loading: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func
};