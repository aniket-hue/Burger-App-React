import { act } from "react-dom/test-utils";
import * as actionTypes from "./action";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  totalPrice: 0,
};

const PRICES = {
  salad: 0.5,
  bacon: 2,
  meat: 3,
  cheese: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
