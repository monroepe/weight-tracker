Router.map( function () {
  this.route('habits');
});
Router.route('/', function () {
  this.render('Home');
});
