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
  }
});

Template.weighinForm.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

Template.weighinForm.helpers({
  timeOfDay: function(){
    return ["Morning", "Afternoon", "Evening", "Night"]
  }
});
