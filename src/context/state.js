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
      Axios.get(`https://restcountries.eu/rest/v2/all`)
      .then((res)=>dispatch({type:"success" , payload:res.data}))
      .catch((err)=>{dispatch({type:"fail" , payload:"network error"})})
  };
  const search=()=>{
      // Declare variables
      let input, filtered, outer, inner, a, i, txtValue;
      input = document.getElementById('myInput');
      filtered = input.value.toUpperCase();
      outer = document.getElementById("parent");
      inner = outer.querySelectorAll('#childcon');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < inner.length; i++) {
        a = inner[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filtered) > -1) {
          inner[i].style.display = "";
        } else {
          inner[i].style.display = "none";
        }
      }
 
    dispatch({type:"search"})
  }
  return (
    <SuperContext.Provider
      value={{
        load: state.load,
        data: state.data,
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
