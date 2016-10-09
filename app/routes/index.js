import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    this.transitionTo('rentals'); // It doesn't add to history, so this is a true redirect
    // while transitionTo will add to history
  }
});
