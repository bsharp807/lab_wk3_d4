const PubSub = require('../helpers/pub_sub.js');

class DogView {

  constructor() {
    this.container = document.querySelector('#dog-container');
  }

  bindEvents() {
    PubSub.subscribe('Dogs:dog-data-loaded', (evt) => {
      const dogs = evt.detail;
      this.render(dogs);
    });
  }

  render(dogs) {
    this.clearDogs();
    dogs.forEach((dog) => {
      const img = this.createImage(dog);
      this.container.appendChild(img);
    });
  }

  clearDogs() {
    this.container.innerHTML = '';
  }

  createImage(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('flex-item');
    return img;
  }

}

module.exports = DogView;
