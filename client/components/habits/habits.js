Template.habits.helpers({
  habits: function() {
    return Habits.find({owner: Meteor.userId()});
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
