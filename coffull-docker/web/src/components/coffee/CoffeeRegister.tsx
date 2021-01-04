import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { CoffeeType } from "types/CoffeeTypes";
import "assets/styles/coffee/CoffeeRegister.css";
import axios, { AxiosResponse } from "axios";
import { useHistory } from "react-router-dom";

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

// CoffeeRegisterのpropsのtype aliasを定義
type CoffeeRegisterPropsType = {
  coffee?: CoffeeType;
};

type CoffeeRegisterStateType = {
  name: string;
  feature: string;
  taste: string;
  impressions: string;
};

//
type CoffeeRegisterActionType = {
  type?: string;
  value: string;
};

// stateの初期状態
const initCoffeeRegisterState: CoffeeRegisterStateType = {
  name: "",
  feature: "",
  taste: "",
  impressions: "",
};

export class ActionType {
  static readonly NAME: string = "COFFEE_NAME"
  static readonly FEATURE: string = "COFFEE_FEATURE"
  static readonly TASTE: string = "COFFEE_TASTE"
  static readonly IMPRESSION: string = "COFFEE_IMPRESSION"
}

export const CoffeeRegister: React.FC<CoffeeRegisterPropsType> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const reducer = (
    state: CoffeeRegisterStateType,
    action: CoffeeRegisterActionType
  ): CoffeeRegisterStateType => {
    switch (action.type) {
      case ActionType.NAME:
        const newName = { name: action.value };
        const newState: CoffeeRegisterStateType = { ...state, ...newName };
        return newState;
      case ActionType.FEATURE:
        const newFeature = { feature: action.value };
        return { ...state, ...newFeature };
      case ActionType.TASTE:
        const newTaste = { taste: action.value };
        return { ...state, ...newTaste };
      case ActionType.IMPRESSION:
        const newImpression = { impressions: action.value };
        return { ...state, ...newImpression };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initCoffeeRegisterState);
  const refState = useRef(state);
  useEffect(() => {
    refState.current = state;
  },[state]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;
      const actionType: string = event.target.name;
        dispatch({
          type: actionType,
          value: value,
        });
    },[]
  );

  const handleSubmit = useCallback(
    (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const args = refState.current;
      const url = "http://localhost:8000/api/register";

      axios
      .post<CoffeeType, AxiosResponse<CoffeeType>>(url, args)
      .then((res) => {
        console.log("register success")
        console.log(res);
        history.push('/coffee/'+ res.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [history]
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        <form noValidate autoComplete="off" className={classes.pos} onSubmit={handleSubmit}>
          <div className={"coffee-name-input"}>
            <TextField
              required
              id="coffee-name"
              label="coffee name"
              name={ActionType.NAME}
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div className={"coffee-feature-input"}>
            <TextField
              id="coffee-feature"
              label="feature"
              name={ActionType.FEATURE}
              multiline
              rows={2}
              value={state.feature}
              onChange={handleChange}
            />
          </div>
          <div className={"coffee-taste-input"}>
            <TextField
              id="coffee-taste"
              label="taste"
              name={ActionType.TASTE}
              multiline
              rows={2}
              value={state.taste}
              onChange={handleChange}
            />
          </div>
          <div className={"coffee-impression-input"}>
            <TextField
              id="coffee-impression"
              label="impression"
              name={ActionType.IMPRESSION}
              multiline
              rows={4}
              value={state.impressions}
              onChange={handleChange}
            />
          </div>
          <CardActions>
            <Button type="submit" size="small">登録する</Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default CoffeeRegister;
