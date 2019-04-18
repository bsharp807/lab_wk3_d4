const PubSub = require('../helpers/pub_sub.js');

class BreedFormView {

  constructor() {
    this.element = document.querySelector('#breed-form');
  }

  bindEvents() {
    PubSub.subscribe('Dogs:breeds-loaded', (evt) => {
      const dogBreeds = evt.detail;
      this.populateBreeds(dogBreeds);
      this.publishBreed();
      });
    }

    populateBreeds(object) {
      const listOfBreeds = Object.keys(object);
      listOfBreeds.forEach((breed) => {
        const option = document.createElement('option');
        option.textContent = breed;
        option.value = breed;
        this.element.appendChild(option);
      })
    }

    publishBreed(){
      this.element.addEventListener('change', (evt) => {
        const breed = evt.target.value;
        PubSub.publish('BreedFormView:form-submitted', breed);
      })
    }


}

module.exports = BreedFormView;
