class RequestHelper {

  constructor(url) {
    this.url = url;
  }

  get() {
    return fetch(this.url)
      .then(res => res.json())
      .catch((message) => {
        console.error(message)
      })
  }
}

module.exports = RequestHelper;
