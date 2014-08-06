import Ember from 'ember';
import FlashMessageMixin from 'ember-cli-flash-message/mixins/flash-message';

module('FlashMessageMixin');

// Replace this with your real tests.
test('it works', function() {
  var FlashMessageObject = Ember.Object.extend(FlashMessageMixin);
  var subject = FlashMessageObject.create();
  ok(subject);
});
