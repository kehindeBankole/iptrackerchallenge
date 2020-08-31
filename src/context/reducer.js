
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
  }
};
