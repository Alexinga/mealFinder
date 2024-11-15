import { createContext, useContext, useReducer } from "react";
import { GetMealFromIngredientList, GetSelectedMealID } from "../api/api.js";

const MealContext = createContext();

const initialState = {
  mealsIngredientList: [],
  isLoading: false,
  errorMsg: "",
  selectId: null,
  selectedMeal: {},
  collection: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "mealIngredient/loaded":
      return {
        ...state,
        mealsIngredientList: action.payload,
        isLoading: false,
        errorMsg: "",
      };
    case "selectedMeal/loaded": {
      return {
        ...state,
        isLoading: false,
        selectedMeal: action.payload,
        errorMsg: "",
      };
    }
    case "collection/loaded":
      return {
        ...state,
        isLoading: false,
        collection: [...state.collection, state.selectedMeal],
      };
    case "collection/removed":
      return {
        ...state,
        isLoading: false,
        collection: state.collection.filter(
          (item) => item.idMeal !== action.payload
        ),
      };
    case "id/loaded": {
      return { ...state, selectId: action.payload };
    }
    case "reject":
      return { ...state, isLoading: false, errorMsg: action.payload };
    default:
      throw new Error("An error occurred in the reducer function");
  }
}

function MealProvider({ children }) {
  const [
    {
      mealsIngredientList,
      isLoading,
      errorMsg,
      selectedMeal,
      selectId,
      collection,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  async function fetchMealsIngredient(ingredient) {
    dispatch({ type: "loading" });
    try {
      const data = await GetMealFromIngredientList(ingredient);
      // console.log(`meal context ${data}`);
      dispatch({ type: "mealIngredient/loaded", payload: data });
    } catch (err) {
      dispatch({ type: "reject", payload: err.message });
    }
  }
  async function fetchMealId(id) {
    dispatch({ type: "loading" });
    try {
      const data = await GetSelectedMealID(id);
      dispatch({ type: "selectedMeal/loaded", payload: data });
      dispatch({ type: "id/loaded", payload: data.idMeal });
    } catch (err) {
      dispatch({ type: "reject", payload: err.message });
    }
  }
  function addCollection() {
    dispatch({ type: "collection/loaded" });
  }
  function deleteCollection(id) {
    dispatch({ type: "collection/removed", payload: id });
  }
  return (
    <MealContext.Provider
      value={{
        mealsIngredientList,
        isLoading,
        errorMsg,
        selectedMeal,
        selectId,
        collection,
        fetchMealsIngredient,
        fetchMealId,
        addCollection,
        deleteCollection,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

function useMeals() {
  const contextValue = useContext(MealContext);
  if (contextValue === undefined)
    throw new Error(
      "This MealContext is being used outside of the MealProvider"
    );
  return contextValue;
}

export { useMeals, MealProvider };
