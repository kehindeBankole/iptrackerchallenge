import React from "react";
import { SuperContext } from "./context";
import { userReducer } from "./reducer";
import { useReducer } from "react";
import Axios from "axios";

function SuperHeroState(props) {
  const initialState = {
    load: true,
    err: "",
    data: [],
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  const fetch = () => {
      Axios.get(`https://geo.ipify.org/api/v1?apiKey=at_hJc92kpoSb6zyC90qOZ3NTbCiOYMI&email=bankolek1@gmail.com`)
      .then((res)=>dispatch({type:"success" , payload:res.data}))
      .catch((err)=>{dispatch({type:"fail" , payload:"network error"})})
  };
  return (
    <SuperContext.Provider
      value={{
        load: state.load,
        data: state.data,
        err: state.err,
        fetch
      }}
    >
     {props.children}
    </SuperContext.Provider>
  );
}

export default SuperHeroState;
