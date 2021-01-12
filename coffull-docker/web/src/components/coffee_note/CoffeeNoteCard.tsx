import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CoffeeNoteType } from 'types/CoffeeNoteTypes';
import { useHistory } from 'react-router-dom';

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

// CoffeeCardのpropsのtype aliasを定義
type CoffeeNoteCardProps = {
  coffeeNote: CoffeeNoteType
}

export const CoffeeNoteCard: React.FC<CoffeeNoteCardProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const noteId = props.coffeeNote.noteId;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          xx月xx日
        </Typography>
        <Typography variant="h5" component="h2">
          {props.coffeeNote.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.coffeeNote.feature}
        </Typography>
        <Typography variant="body2" component="p">
          taste : {props.coffeeNote.taste}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          impression : {props.coffeeNote.impression}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push('coffee-note/'+ noteId)}>詳細</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeNoteCard;