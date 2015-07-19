Template.habits.helpers({
  habits: function() {
    return Habits.find({owner: Meteor.userId()});
  }
});
