import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { CoffeeNoteType } from "types/CoffeeNoteTypes";
import { CoffeeNoteCard } from "./CoffeeNoteCard";
import "assets/styles/coffee/CoffeeCardList.css";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

type CoffeeNoteListParamType = {
  search: string;
};

const CoffeeNoteList: React.FC<{}> = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams<CoffeeNoteListParamType>();

  const [coffeeNotes, setCoffeeNotes] = useState<CoffeeNoteType[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  const getCoffeeNotes = useCallback(() => {
    if (params && params.search) {
      setSearchWord(params.search);
      axios
        .get<CoffeeNoteType[]>(
          "http://localhost:8000/api/v1/coffull/coffee-note" + "?search=" + params.search)
        .then((res) => {
          setCoffeeNotes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get<CoffeeNoteType[]>(
          "http://localhost:8000/api/v1/coffull/coffee-note"
        )
        .then((res) => {
          setCoffeeNotes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params]);

  const searchNotes = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value: string = event.currentTarget["search-word"].value;
    setSearchWord(value);
    history.push("coffee-notes/" + value);
  }, [history]);

  useEffect(() => {
    getCoffeeNotes();
    return () => {
      setCoffeeNotes([]);
    };
  }, [getCoffeeNotes]);

  return (
    <>
      <div className={classes.root}>
        <Button
          variant="contained"
          onClick={() => history.push("note-register")}
        >
          コーヒーノートを登録
        </Button>
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={searchNotes}
      >
        <TextField
          name="search-word"
          label="検索ワード"
          variant="outlined"
          defaultValue={searchWord}
        />
        <Button type="submit" variant="outlined">
          検索
        </Button>
      </form>
      <div>
        {coffeeNotes.map((item, i) => {
          return (
            <div key={i} className="card-container">
              <CoffeeNoteCard coffeeNote={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoffeeNoteList;
