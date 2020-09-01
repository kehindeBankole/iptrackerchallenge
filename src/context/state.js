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
    loadsearch:true,
    errsearch:"",
    datasearch:[]
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  const fetch = (email) => {
      Axios.get(`https://restcountries.eu/rest/v2/all`)
      .then((res)=>dispatch({type:"success" , payload:res.data}))
      .catch((err)=>{dispatch({type:"fail" , payload:"network error"})})
  };
  const search=(countryname)=>{
    Axios.get(`https://restcountries.eu/rest/v2/name/${countryname}`)
    .then((res)=>dispatch({type:"searchsuccess" , payload:res.data}))
    .catch((err)=>{dispatch({type:"errfail" , payload:"network error"})})
  }
  return (
    <SuperContext.Provider
      value={{
        load: state.load,
        data: state.data,
        loadsearch: state.loadsearch,
        datasearch: state.datasearch,
        err: state.err,
        fetch,
        search
      }}
    >
      
     {props.children}
    </SuperContext.Provider>
  );
}

export default SuperHeroState;
