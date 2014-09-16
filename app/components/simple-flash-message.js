import Ember from 'ember';
import Queue from '../message-queue';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: ['typeClass'],
  classPrefix: 'message',
  currentMessage: Ember.computed.oneWay('queue.firstObject'),
  interval: Ember.computed.alias('queue.interval'),
  queue: Queue,

  hideOnLoad: function() {
    var currentMessage = this.get('currentMessage');

    if (!currentMessage) {
      this.$().hide();
    }

    this.showOrHide();
  }.on('didInsertElement'),

  typeClass: function() {
    var type = this.get('currentMessage.type');
    type = type ? '-' + type : '';

    return this.get('classPrefix') + type;
  }.property('currentMessage.type'),

  showOrHide: function() {
    if (this.get('currentMessage')) {
      this.show();
    } else {
      this.hide();
    }
  }.observes('currentMessage.message'),

  show: function() {
    this.$().fadeIn('slow');
  },

  hide: function() {
    this.$().fadeOut('slow');
  },

  actions: {
    dismissFlashMessage: function() {
      this.get('queue').removeMessage();
    }
  }
});
