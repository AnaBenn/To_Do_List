var app = {};

$(function() { //when DOM is ready...
  app.users = new UserCollection([
    {username:'Anastasia'},
    {username:'Sarah'},
    {username:'Chad'}
  ]);

  app.tasks = new IssueCollection([
      { title:      'Build Models',
        description:'Build the User and Issue models.',
        creator:    'Chad',
        assignee:   '',
        status:     'unassigned'
      }
  ]);

  app.gui = new GUI(app.users,
            app.tasks,
            '#app');// selector of main div
});
