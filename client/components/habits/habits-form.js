Template.habitForm.helpers({
  frequencies: function(){
      return ["Daily", "Weekly", "Monthly"]
  }
});

Template.habitForm.events({
    'change #frequency-select': function (event, template) {
        var frequency = $(event.currentTarget).val();
    },

    'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newHabit = {
      title: event.target.title.value,
      frequency: event.target.frequency.value,
      description: event.target.description.value,
      owner: Meteor.userId(),           // _id of logged in user
      email: Meteor.user().email
    };

    Habits.insert(newHabit);

    $('.form-control').val('');
  }
});
