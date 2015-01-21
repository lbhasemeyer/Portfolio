import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {id: 1, title: 'Mucklucks', body: "is a haven for travelers and wanderlusters.  It makes travel research easy, visual, collaborative, and fun.  It is also a place to gather personal travel memories.", url: "https://mucklucks.herokuapp.com/"},
    {id: 2, title: 'gCamp', body: "is a Rails app that has some of the same functionality as Basecamp. Users can create projects, tasks, comments, memberships, and also link their Pivotal Tracker projects.", url: "https://secure-dawn-1128.herokuapp.com/"},
    ];
  }
});
