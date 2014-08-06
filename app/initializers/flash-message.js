import Ember from 'ember';
import Queue from '../flash-message-queue';

export default {
  name: 'flash-message',

  initialize: function(container, app) {
    var flashMessage = function(message, type, duration) {
      Queue.pushMessage(message, type, duration);
    };

    app.register('flashMessage:main', flashMessage, { instantiate: false });

    Ember.A(['route', 'controller', 'view']).forEach(function(place) {
      app.inject(place, 'flashMessage', 'flashMessage:main');
    });
  }
};
