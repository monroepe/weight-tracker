Template.home.helpers({
  weighins: function() {
    return WeighIns.find({owner: Meteor.userId()});
  }
});
