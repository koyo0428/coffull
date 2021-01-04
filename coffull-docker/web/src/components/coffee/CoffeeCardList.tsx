import React, { useState, useEffect } from "react";
import axios from "axios";
import { CoffeeType } from "types/CoffeeTypes";
import CoffeeCard from "./CoffeeCard";
import "assets/styles/coffee/CoffeeCardList.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const CoffeeCardList: React.FC<{}> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [coffees, setCoffees] = useState<CoffeeType[]>([]);
  useEffect(() => {
    getCoffees();
    return () => {};
  },[]);

  const getCoffees = () => {
    axios
      .get<CoffeeType[]>("http://localhost:8000/api")
      .then((res) => {
        setCoffees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className={classes.root}>
      <Button variant="contained" onClick={() => history.push('/coffee-register')}>コーヒーノートを登録</Button>
    </div>
    <div>
      {coffees.map((item, i) => {
        return (
          <div key={i} className="card-container">
            <CoffeeCard coffee={item} />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default CoffeeCardList;
