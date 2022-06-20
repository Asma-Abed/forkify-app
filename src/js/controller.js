import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import showResultsView from './views/showResultsView.js';
import paginationView from './views/paginationView.js';

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

    // update results to mark selected search result
    showResultsView.update(model.getSearchResultsPage());

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
    // showResultsView.render(model.state.search.results);
    showResultsView.render(model.getSearchResultsPage());
    // console.log(model.getSearchResultsPage(1));
    // console.log(model.state.search.results);

    // render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  console.log(goToPage);
  // render new search results
  showResultsView.render(model.getSearchResultsPage(goToPage));
  // render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update the servings in state
  model.updateServings(newServings);
  // update recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  model.addBokkmark(model.state.recipe);
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(conrtolLoadSearch);
  paginationView.addHandlerClick(controlPagination);
};
init();
