import React, { useState, useEffect } from "react";
import axios from "axios";
import { CoffeeType } from "../types/CoffeeType";
import CoffeeCard from "./CoffeeCard";
import "../assets/styles/App.css";

// Appのpropsのtype aliasを定義
type CoffeeCardListProps = {};

const CoffeeCardList: React.FC<CoffeeCardListProps> = (props) => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    getCoffees();
    return () => {};
  });

  const getCoffees = () => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => {
        setCoffees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {coffees.map((item, i) => {
        return (
          <div key={i} className="card-container">
            <CoffeeCard coffee={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CoffeeCardList;
