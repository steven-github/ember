import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { empty, match, not } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Comming Soon',
  emailAddress: '',
  responseMessage: '',

  // Observers will always be called when the value of the emailAddress changes,
  // while the computed property only changes when you go and use that property.

  // isDisabled: false,

  // isDisabled: computed('emailAddress', function () {
  //   return this.get('emailAddress') === '';
  // }),

  // isDisabled: empty('emailAddress'),

  isValid: match('emailAddress', /^.+@.+\..+$/),
  // isValid: match('model.email', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  // actualEmailAddress: computed('emailAddress', function() {
  //   console.log(
  //     'actualEmailAddress function is called: ',
  //     this.get('emailAddress')
  //   );
  // }),
  // actualEmailAddress: computed('model.email', function() {
  //   console.log(
  //     'actualEmailAddress function is called: ',
  //     this.get('model.email')
  //   );
  // }),

  // emailAddressChanged: observer('emailAddress', function() {
  //   console.log('observer is called', this.get('emailAddress'));
  // }),
  // emailAddressChanged: observer('model.email', function() {
  //   console.log('observer is called', this.get('model.email'));
  // }),

  actions: {
    saveInvitation() {
      // const email = this.get('emailAddress');

      // const newInvitation = this.store.createRecord('invitation', {
      //   email: email
      // });
      // // newInvitation.save();
      // newInvitation.save().then(function(response) {
      //   console.log('Email address is saved.');
      //   this.set(
      //     'responseMessage',
      //     `Thank you! We have just saved your email address: ${this.get(
      //       'emailAddress'
      //     )}`
      //   );
      //   this.set('emailAddress', '');
      // });

      // this.set(
      //   'responseMessage',
      //   `Thank you! We have just saved your email address: ${this.get(
      //     'emailAddress'
      //   )}`
      // );
      // this.set('emailAddress', '');

      var _that = this;
      //var email = this.get('emailAddress');
      var email = this.get('model.email');

      var newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      newInvitation.save().then(function(response) {
        _that.set(
          'responseMessage',
          'Thank you! We saved your email address with the following id: ' +
            response.get('id')
        );
        _that.set('emailAddress', '');
      });
    }
  }
});
