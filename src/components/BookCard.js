import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BookCard(props) {
  const classes = useStyles();
  const {
    book_author,
    book_pages,
    book_publication_city,
    book_publication_country,
    book_publication_year,
    book_title
  } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography noWrap className={classes.title} color="textSecondary" gutterBottom>
          {book_title}
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography noWrap className={classes.pos} color="textSecondary">
          {book_author}
        </Typography>
        <Typography variant="body2" component="p">
          {book_publication_country}, {book_publication_city}, {book_publication_year}
          <br />
          {book_pages}
        </Typography>
      </CardContent>
    </Card>
  );
};

BookCard.propTypes = {
  book_author: PropTypes.array,
  book_pages: PropTypes.number,
  book_publication_city: PropTypes.string,
  book_publication_country: PropTypes.string,
  book_publication_year: PropTypes.number,
  book_title: PropTypes.string,
};