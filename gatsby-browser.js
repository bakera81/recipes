require("./src/styles/global.css")
// var anchorate = require('anchorate').anchorate
//
// exports.onRouteUpdate = () => {
//   anchorate()
// }

exports.onRouteUpdate = (location) => {
  if (location.location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.location.hash}`).scrollIntoView();
    }, 0);
  }
};
