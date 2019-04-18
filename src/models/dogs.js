const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

class Dogs {

  constructor() {
    this.dogs = [];
    this.breeds = [];
  }

  getBreeds() {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
      .then((data) => {
        this.breeds = data.message;
        PubSub.publish('Dogs:breeds-loaded', this.breeds);
      })
  }

  getDogs() {
    PubSub.subscribe('BreedFormView:form-submitted',(evt) => {
      const breed = evt.detail;
      console.log(breed);    
      const url = `https://dog.ceo/api/breed/${breed}/images`;
        const requestHelper = new RequestHelper(url);
        requestHelper.get()
          .then((data) => {
            this.dogs = data.message;
            PubSub.publish('Dogs:dog-data-loaded', this.dogs);
          });
    });
  }

};

module.exports = Dogs;
