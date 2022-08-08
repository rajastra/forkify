class searchView {
  #parentElment = document.querySelector('.search');

  getQuery() {
    const result = this.#parentElment.querySelector('.search__field').value;
    this._clearInput();
    return result;
  }

  _clearInput() {
    this.#parentElment.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this.#parentElment.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
