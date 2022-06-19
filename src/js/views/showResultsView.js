import icons from 'url:../../img/icons.svg';
class ShowResultsView {
  #data;
  #parentEl = document.querySelector('.results');
  render(data) {
    this.#data = data;
    const markup = this.#data.map(this.#generateMarkup).join('');
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  #generateMarkup(rec) {
    return `
    <li class="preview">
            <a class="preview__link preview__link--active" href="${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }

  #clear() {
    this.#parentEl.innerHTML = '';
  }
}
export default new ShowResultsView();
