import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPAge = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // first page
    if (currentPAge === 1 && numPages > 1) {
      return `
      <button data-goto="${
        currentPAge + 1
      }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPAge + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // last page
    if (currentPAge === numPages && numPages > 1) {
      return `
      <button data-goto="${
        currentPAge - 1
      }" class="btn--inline pagination__btn--prev">
             <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
            </svg>
             <span>Page ${currentPAge - 1}</span>
          </button>`;
    }

    // other page
    if (currentPAge < numPages) {
      return `
      <button data-goto="${
        currentPAge - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPAge - 1}</span>
          </button>
          <button data-goto="${
            currentPAge + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPAge + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // only 1 page
    return '';
  }
}
export default new PaginationView();
