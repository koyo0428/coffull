import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { AuthContext } from "utils/AuthProvider";

type SignupStateType = {
  email: string;
  password: string;
};

//
type SignupActionType = {
  type?: string;
  value: string;
};

// stateの初期状態
const initSignupState: SignupStateType = {
  email: "",
  password: "",
};

export class ActionType {
  static readonly EMAIL: string = "EMAIL";
  static readonly PASSWORD: string = "PASSWORD";
}

const SignUp = () => {
  const { signup } = useContext(AuthContext);

  const reducer = (
    state: SignupStateType,
    action: SignupActionType
  ): SignupStateType => {
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

  const [state, dispatch] = useReducer(reducer, initSignupState);
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

  // AuthContextからsignup関数を受け取る
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const inputValues = refState.current;
      signup(inputValues.email, inputValues.password);
    },
    [signup]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name={ActionType.EMAIL}
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            name={ActionType.PASSWORD}
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
