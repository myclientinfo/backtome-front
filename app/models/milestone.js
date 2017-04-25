import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  subscribers: DS.attr('number'),
  achieved: DS.attr('date'),
  embedToken: DS.attr('string'),
  embedType: DS.attr('string'),
  embedMessage: DS.attr('string'),
  embedConfirmed: DS.attr('boolean'),
  messageType: DS.attr('string'),
  messageSubject: DS.attr('string'),
  messageContent: DS.attr('string'),
  messageConfirmed: DS.attr('boolean'),
});
