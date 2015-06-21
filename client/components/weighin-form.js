Template.weighinForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newWeighIn = {
      date: event.target.date.value,
      weight: event.target.weight.value,
      owner: Meteor.userId(),           // _id of logged in user
      email: Meteor.user().email
    };

    // create the new poll
    WeighIns.insert(newWeighIn);

    $('.form-control').val('');
  }
});

Template.weighinForm.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});
