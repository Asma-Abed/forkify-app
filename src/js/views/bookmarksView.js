import View from './view.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(rec) {
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
            <a class="preview__link ${
              rec.id === id ? `preview__link--active` : ''
            }" href="#${rec.id}">
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
export default new BookmarksView();
