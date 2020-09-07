export const userReducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        load: true,
      };
    case "success":
      return {
        ...state,
        data: action.payload,
        load: false,
        err: "",
      };
    case "fail":
      return {
        ...state,
        data: [],
        err: action.payload,
        load: false,
      };
    case "search":
      return {
        ...state,
        filter: state.data.filter((country, x) => {
          return (
            country.name
              .toLowerCase()
              .includes(action.payload1.toLowerCase()) 
          );
        }),
      };
    case "byreg":
      return {
        ...state,
        filter: state.data.filter((country)=>{
         return country.region.toLowerCase() == action.payload2.toLowerCase()
        })
   
      };
    default:
      return state;
  }
};
