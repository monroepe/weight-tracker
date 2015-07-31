Template.habits.helpers({
  habits: function() {
    return Habits.find({owner: Meteor.userId()});
  },
  habitInstances: function() {
    return HabitInstances.find({date: new Date().setHours(0,0,0,0)})
  }
});

Template.habits.events({
  'click #complete-button': function() {
    var $this = $("#complete-button");
    $this.toggleClass('complete');
    $this.toggleClass('incomplete');
    if ($this.val() == "Incomplete") {
      $this.val("Complete");
    } else {
      $this.val("Incomplete");
    }
  }
});

Template.habits.rendered = function() {
  var today = new Date().setHours(0,0,0,0);
  var instances = HabitInstances.find({owner: Meteor.userId()}, {date: today}).fetch();
  if (instances == '') {
    var habits = Habits.find({owner: Meteor.userId()}).fetch();
    var newInstance;
    habits.forEach(function(habit) {
      newInstance = {
        title: habit.title,
        frequency: habit.frequency,
        description: habit.description,
        owner: Meteor.userId(),
        email: Meteor.user().email,
        date: today,
        completed: false
      };
      HabitInstances.insert(newInstance);
    })
  }
};
