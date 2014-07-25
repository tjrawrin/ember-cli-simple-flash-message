import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberCliFlashMessageENV.locationType
});

Router.map(function() {
});

export default Router;
