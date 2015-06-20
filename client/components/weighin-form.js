Template.weighinForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newWeighIn = {
      date: event.target.date.value,
      timeOfDay: event.target.timeOfDay.value,
      weight: event.target.weight.value
    };

    // create the new poll
    WeighIns.insert(newWeighIn);
  },

  'change #timeOfDay-select': function (event, template) {
    var timeOfDay = $(event.currentTarget).val();
    console.log("timeOfDay : " + timeOfDay);
  }

});

Template.weighinForm.helpers({
  timeOfDay: function(){
    return ["Morning", "Afternoon", "Evening", "Night"]
  }
});
