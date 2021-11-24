import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    width: '150px',
    height: '150px',
    objectFit: 'cover'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    width: '150px',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  h9: {
    marginBottom: '5px',
  },
  title: {
    marginBottom: '15px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
