import Ember from 'ember';
import Message from './mixins/flash-message';

export default Ember.ArrayProxy.extend({
  content: Ember.A(),
  interval: 100000,

  queueDidChange: function() {
    var duration = this.get('content.firstObject.duration') || this.get('interval');

    this.arrayContentDidChange();
    Ember.run.debounce(this, this.removeMessage, duration);
  }.observes('content.@each'),

  pushMessage: function(message, type, duration) {
    this.pushObject(
      Message.create({
        message: message,
        type: type,
        duration: duration
      })
    );
  },

  removeMessage: function() {
    var currentMessage = this.get('firstObject');

    this.arrayContentWillChange();
    this.removeObject(currentMessage);
  },

}).create();
