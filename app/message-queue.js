import Ember from 'ember';
import Message from './mixins/simple-flash-message';

export default Ember.ArrayProxy.extend({
  content: Ember.A(),
  interval: 6000,

  queueDidChange: function() {
    var duration = this.get('interval');
    var content = this.get('content');

    this.arrayContentDidChange();

    if (content.length > 1) {
      this.removeMessage();
      Ember.run.debounce(this, this.removeMessage, duration);
    } else {
      Ember.run.debounce(this, this.removeMessage, duration);
    }
  }.observes('content.@each'),

  pushMessage: function(message, type, duration) {
    this.pushObject(
      Message.create({
        message: message,
        type: type,
        duration: duration,
      }),
    );
  },

  removeMessage: function() {
    var currentMessage = this.get('firstObject');

    this.arrayContentWillChange();
    this.removeObject(currentMessage);
  },
}).create();
