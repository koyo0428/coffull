import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CoffeeType } from "../types/CoffeeType";
import { useParams } from "react-router-dom";
import axios from "axios";
import { type } from "os";

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

type CoffeeDetailProps = {};

export const CoffeeDetail: React.FC<CoffeeDetailProps> = (props) => {
  const classes = useStyles();
  const initCoffeeState: CoffeeType = {
    id: 0,
    name: "",
    feature: "",
    taste: "",
    impressions: "",
  }
  const [coffee, setCoffee] = useState<CoffeeType>(initCoffeeState);
  useEffect(() => {
    getCoffeeDetail();
    return () => {};
  });
  type CoffeeDetailParamType = {
    coffeeId: string;
  };
  const { coffeeId } = useParams<CoffeeDetailParamType>();

  const getCoffeeDetail = () => {
    axios
      .get<CoffeeType>("http://localhost:8000/api/" + coffeeId)
      .then((res) => {
        setCoffee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          xx月xx日
        </Typography>
        <Typography variant="h5" component="h2">
          {coffee.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {coffee.feature}
        </Typography>
        <Typography variant="body2" component="p">
          taste : {coffee.taste}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          impression : {coffee.impressions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeDetail;
