import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CoffeeNoteDetailParamType, CoffeeNoteType } from "types/CoffeeNoteTypes";
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
const initCoffeeNoteState: CoffeeNoteType = {
  noteId: null,
  name: "",
  feature: "",
  taste: "",
  impression: "",
}

export const CoffeeNoteDetail: React.FC<{}> = (props) => {
  const classes = useStyles();
  const params = useParams<CoffeeNoteDetailParamType>();
  const [coffeeNote, setCoffeeNote] = useState<CoffeeNoteType>(initCoffeeNoteState);

  const getCoffeeDetail = useCallback(() => {
    axios
      .get<CoffeeNoteType>("http://localhost:8000/api/v1/coffull/coffee-note/" + params.noteId)
      .then((res) => {
        setCoffeeNote(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[params.noteId]);

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
          {coffeeNote.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {coffeeNote.feature}
        </Typography>
        <Typography variant="body2" component="p">
          taste : {coffeeNote.taste}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          impression : {coffeeNote.impression}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">編集する</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeNoteDetail;
