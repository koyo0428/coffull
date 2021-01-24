import React, { useEffect, useState } from "react";
import { firebaseApp } from "utils/firebaseApp";
import { useHistory } from 'react-router-dom';
import firebase from "firebase/app";

export type currentUserType = {
    age: number,
    name: string,
    occupation: string,
    spouse: boolean
} | null

export type authContextType = {
    login: (email:string, password:string) => void ,
    signup: (email:string, password:string) => void,
    currentUser: firebase.User | null
}

export const initialContext: authContextType = {
    login: () => {},
    signup: () => {},
    currentUser: null
}

type authProviderProps = {
  children: any,
}

// contextの作成
export const AuthContext = React.createContext(initialContext);

export const AuthProvider: React.FC<authProviderProps> = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User|null>(null);
  const history = useHistory();

  // ユーザーをログインさせる関数
  const login = async (email:string, password:string) => {
    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  // 新しいユーザーを作成しログインさせる関数
  const signup = async (email:string, password:string) => {
    try {
      await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser);
  }, [currentUser]);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login,
        signup,
        currentUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};