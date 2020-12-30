import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CoffeeType } from '../types/CoffeeType';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type CoffeeCardProps = {
  coffee: CoffeeType
}

export const CoffeeCard: React.FC<CoffeeCardProps> = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          xx月xx日
        </Typography>
        <Typography variant="h5" component="h2">
          {props.coffee.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.coffee.feature}
        </Typography>
        <Typography variant="body2" component="p">
          taste : {props.coffee.taste}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          impression : {props.coffee.impressions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;