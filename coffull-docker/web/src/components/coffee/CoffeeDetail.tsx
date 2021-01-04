import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CoffeeDetailParamType, CoffeeType } from "types/CoffeeTypes";
import { useParams } from "react-router-dom";
import axios from "axios";

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

// stateの初期状態
const initCoffeeState: CoffeeType = {
  id: 0,
  name: "",
  feature: "",
  taste: "",
  impressions: "",
}

export const CoffeeDetail: React.FC<{}> = (props) => {
  const classes = useStyles();
  const { coffeeId } = useParams<CoffeeDetailParamType>();
  const [coffee, setCoffee] = useState<CoffeeType>(initCoffeeState);

  const getCoffeeDetail = useCallback(() => {
    axios
      .get<CoffeeType>("http://localhost:8000/api/" + coffeeId)
      .then((res) => {
        setCoffee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[coffeeId]);

  useEffect(() => {
    getCoffeeDetail();
    return () => {};
  },[getCoffeeDetail]);

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
        <Button size="small">編集する</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeDetail;
