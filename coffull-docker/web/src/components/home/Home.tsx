import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home: React.FC<{}> = () => {
  const history = useHistory();
  return (
    <div>
      <h3>コーヒー日記帳webアプリ</h3>
      <br />
      <p>飲んだコーヒーを記録するアプリ。</p>
      <p>コーヒーの種類や淹れ方などを記録できます。</p>
      <Button size="small" variant="outlined" onClick={() => history.push("coffee-notes")}>
         コーヒーノートへ
      </Button>
    </div>
  );
};

export default Home;
