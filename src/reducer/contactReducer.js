const initState = {
  newContactForm: [],
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_CONTACT_FORM":
      return {
        ...state,
        newContactForm: [action.payload],
      };
    default:
      break;
  }
  return state;
};

export default contactReducer;
