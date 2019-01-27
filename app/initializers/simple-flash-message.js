import Ember from 'ember';
import Queue from '../message-queue';

export default {
  name: 'simple-flash-message',

  initialize: function(container, app) {
    var simpleFlashMessage = function(message, type, duration) {
      Queue.pushMessage(message, type, duration);
    };

    app.register('simpleFlashMessage:main', simpleFlashMessage, {
      instantiate: false,
    });

    Ember.A(['route', 'controller', 'view']).forEach(function(place) {
      app.inject(place, 'simpleFlashMessage', 'simpleFlashMessage:main');
    });
  },
};
