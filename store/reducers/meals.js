import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.mealId
      );
      const updatedFavMeals = [...state.favoriteMeals];
      if (existingIndex > -1) {
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const newFavMeal = state.meals.filter(
          (meal) => meal.id === action.payload.mealId
        )[0];
        updatedFavMeals.push(newFavMeal);
        return {
          ...state,
          favoriteMeals: updatedFavMeals,
        };
      }

    default:
      return state;
  }
};

export default mealsReducer;
