var GUI = (function() { //IIFE for all Views

  
  var LoginView = Backbone.View.extend({
    id: "loginViewContainer",
    render: function() {
      var label = '<h2>To Do List</h2><h3>Please choose your name below to log in...</h3>';
      var dropDown = '<select id = "dropDown"><option value=""></option><option value="Chad">' + app.users.at(2).get("username") + '</option><option value="Sarah">' + app.users.at(1).get("username") + '</option><option value="Anastasia">' + app.users.at(0).get("username") + '</option></select>';
      this.$el.html(label + dropDown);
    },

    initialize: function() {
      this.listenTo(app.tasks, 'update', this.render);
    },

    events: {
      "change #dropDown": "login"
    },

    login: function() {
      var user = $("#dropDown").val();
      app.currentUser = user;
      var userModel = app.users.findWhere({
        username: user
      });

      // var userTasksModel = app.users.where({
      //   assignee: user
      // });
      // //returns the first model that it matches
      // var newUserView = new UserView({
      //   model: userModel
      // });
      // var newUnassignedTaskView = new UnassignedTasksView();
      // var newUserTasksView = new UserTasksView();
      // newUserView.render(user);
      // newUnassignedTaskView.render();
      // newUserTasksView.render();
      // $("#app").empty();
      // $("#app").append(newUserView.$el);
      // $("#unassignedTasks").append(newUnassignedTaskView.$el);
      // $("#myTasks").append(newUserTasksView.$el);
    }
  });


  // generic ctor to represent interface:
  function GUI(users, tasks, el) {
    var firstView = new LoginView();
    firstView.render();
    $("#app").append(firstView.$el);
  }

  return GUI;
}());
