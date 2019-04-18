const Dogs = require('./models/dogs.js');
const BreedFormView = require('./views/breed_form_view.js');
const DogView = require('./views/dog_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const dogView = new DogView();
  dogView.bindEvents();

  const breedView = new BreedFormView;
  breedView.bindEvents();

  const dogs = new Dogs();
  dogs.getDogs();
  dogs.getBreeds();
});
