Template.body.helpers({

  weighins: function() {
    return WeighIns.find({owner: Meteor.userId()});
  }

});

