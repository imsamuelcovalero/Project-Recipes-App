import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Foods from '../pages/Foods/Foods';
import Drinks from '../pages/Drinks/Drinks';
import FoodDetails from '../pages/FoodDetails/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails/DrinkDetails';
import FoodProgress from '../pages/FoodProgress/FoodProgress';
import DrinkProgress from '../pages/DrinkProgress/DrinkProgress';
import Explore from '../pages/Explore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import FoodsIngredients from '../pages/FoodsIngredients';
import DrinksIngredients from '../pages/DrinksIngredients';
import Nationalities from '../pages/Nationalities';
import Profile from '../pages/Profile/Profile';
import DoneRecipes from '../pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';
import NationalitiesNotFound from '../pages/NationalitiesNotFound';

function Content() {
  // const { mealId, drinkId } = useContext(AppContext);
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:mealId" component={ FoodDetails } />
      <Route exact path="/drinks/:drinkId" component={ DrinkDetails } />
      <Route exact path="/foods/:mealId/in-progress" component={ FoodProgress } />
      <Route exact path="/drinks/:drinkId/in-progress" component={ DrinkProgress } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
      <Route
        exact
        path="/explore/drinks/nationalities"
        component={ NationalitiesNotFound }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default Content;
