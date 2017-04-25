import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('milestone', {
    path: 'triggers/:id'
  }, function() {
    this.route('details');
    this.route('embed');
    this.route('message');
  });
  this.route('account');
});

export default Router;
