import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.company.catchPhrase()
  },
  subscribers() {
    return faker.random.number(100);
  },
  achieved(){
    if (faker.random.number(5) === 2) {
      return faker.date.recent();
    }
    return null;
  },
  messageSubject(){
    return faker.lorem.sentence();
  },
  messageContent(){
    return faker.lorem.paragraph();
  },
  messageConfirmed(){
    return faker.random.boolean();
  },
  embedMessage(){
    return faker.lorem.sentence();
  },
  embedToken(){
    return faker.random.uuid();
  },
  embedConfirmed(){
    return faker.random.boolean();
  },
  embedType: 'embed'
});
