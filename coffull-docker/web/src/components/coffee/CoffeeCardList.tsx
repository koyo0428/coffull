import React, { useState, useEffect } from "react";
import axios from "axios";
import { CoffeeType } from "types/CoffeeTypes";
import CoffeeCard from "./CoffeeCard";
import "assets/styles/coffee/CoffeeCardList.css";

const CoffeeCardList: React.FC<{}> = (props) => {
  const [coffees, setCoffees] = useState<CoffeeType[]>([]);
  useEffect(() => {
    getCoffees();
    return () => {};
  });

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
