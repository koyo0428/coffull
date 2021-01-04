import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home: React.FC<{}> = () => {
  const history = useHistory();
  return (
        <div>
          <h3>Home</h3>
          <Button size="small" onClick={() => history.push('/coffee')}>coffee list</Button>
        </div>
  );
};

export default Home;