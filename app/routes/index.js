import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
  {id: 1, title: 'Intro', body: "I am a Spanish major, and worked for an experience gift company in Boulder for a few years out of college.  My husband and I took a year-long trip around-the-world, and when we got back I was ready to try my hand at a new skill-set.  I have always been interested in learning programming and now know that this is my jam.  At work, or during my free time, I would love to use programming to better lives.  That is very vague, so I'm excited to see where I end up!"}
    ];
  }
});
