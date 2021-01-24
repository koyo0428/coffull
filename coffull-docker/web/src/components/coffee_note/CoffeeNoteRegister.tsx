import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { CoffeeNoteType } from "types/CoffeeNoteTypes";
import "assets/styles/coffee_note/CoffeeNoteRegister.css";
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
type CoffeeNoteRegisterPropsType = {
  coffee?: CoffeeNoteType;
};

type CoffeeNoteRegisterStateType = {
  name: string;
  feature: string;
  taste: string;
  impression: string;
};

//
type CoffeeNoteRegisterActionType = {
  type?: string;
  value: string;
};

// stateの初期状態
const initCoffeeNoteRegisterState: CoffeeNoteRegisterStateType = {
  name: "",
  feature: "",
  taste: "",
  impression: "",
};

export class ActionType {
  static readonly NAME: string = "COFFEE_NAME"
  static readonly FEATURE: string = "COFFEE_FEATURE"
  static readonly TASTE: string = "COFFEE_TASTE"
  static readonly IMPRESSION: string = "COFFEE_IMPRESSION"
}

export const CoffeeNoteRegister: React.FC<CoffeeNoteRegisterPropsType> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const reducer = (
    state: CoffeeNoteRegisterStateType,
    action: CoffeeNoteRegisterActionType
  ): CoffeeNoteRegisterStateType => {
    switch (action.type) {
      case ActionType.NAME:
        const newName = { name: action.value };
        return { ...state, ...newName };
      case ActionType.FEATURE:
        const newFeature = { feature: action.value };
        return { ...state, ...newFeature };
      case ActionType.TASTE:
        const newTaste = { taste: action.value };
        return { ...state, ...newTaste };
      case ActionType.IMPRESSION:
        const newImpression = { impression: action.value };
        return { ...state, ...newImpression };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initCoffeeNoteRegisterState);
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
      const url = process.env.REACT_APP_API_DOMAIN + "api/v1/coffull/coffee-note/";

      axios
      .post<CoffeeNoteType, AxiosResponse<CoffeeNoteType>>(url, args)
      .then((res) => {
        console.log("register success")
        console.log(res);
        history.push('coffee-note/'+ res.data.noteId);
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
              value={state.impression}
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

export default CoffeeNoteRegister;
