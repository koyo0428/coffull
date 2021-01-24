import { Button, Container, TextField } from "@material-ui/core";
import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { AuthContext } from "utils/AuthProvider";

type LoginStateType = {
  email: string;
  password: string;
};

//
type LoginActionType = {
  type?: string;
  value: string;
};

// stateの初期状態
const initLoginState: LoginStateType = {
  email: "",
  password: "",
};

export class ActionType {
  static readonly EMAIL: string = "EMAIL";
  static readonly PASSWORD: string = "PASSWORD";
}

const Login: React.FC<{}> = () => {
  const { login } = useContext(AuthContext);

  const reducer = (
    state: LoginStateType,
    action: LoginActionType
  ): LoginStateType => {
    switch (action.type) {
      case ActionType.EMAIL:
        const newEmail = { email: action.value };
        return { ...state, ...newEmail };
      case ActionType.PASSWORD:
        const newPassword = { password: action.value };
        return { ...state, ...newPassword };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initLoginState);
  const refState = useRef(state);

  useEffect(() => {
    refState.current = state;
  }, [state]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;
      const actionType: string = event.target.name;
      dispatch({
        type: actionType,
        value: value,
      });
    },
    []
  );

  // AuthContextからlogin関数を受け取る
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const inputValues = refState.current;
      login(inputValues.email, inputValues.password);
    },
    [login]
  );

  return (
    <div>
      <Container maxWidth="xs">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="email"
              name={ActionType.EMAIL}
              value={state.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
          </div>
          <div>
            <TextField
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              type="password"
              label="password"
              name={ActionType.PASSWORD}
              value={state.password}
              onChange={handleChange}
              autoComplete="password"
              autoFocus
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
