import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _successMessage = '';

  addHanlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data.map(res => previewView.render(res, false)).join('');
  }
}
export default new BookmarksView();
