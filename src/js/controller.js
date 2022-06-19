import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import showResultsView from './views/showResultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();

    // loading recipe
    await model.loadRecipe(id);
    // rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const conrtolLoadSearch = async function () {
  try {
    // get search query
    const query = searchView.getQuery();
    if (!query) return;
    showResultsView.renderSpinner();
    // load search results
    await model.loadSearchResults(query);

    // render search results
    showResultsView.render(model.state.search.results);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

conrtolLoadSearch();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(conrtolLoadSearch);
};
init();
