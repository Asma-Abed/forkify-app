import View from './view.js';
import icons from 'url:../../img/icons.svg';

class ShowResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errMessage = 'No recipes found! Please try again!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(rec) {
    return `
    <li class="preview">
            <a class="preview__link" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
              </div>
            </a>
          </li>
    `;
  }
}
export default new ShowResultsView();
