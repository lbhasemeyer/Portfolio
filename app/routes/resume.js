import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {id: 1, title: 'Princess of Genovia', body: "I dunno. Must be a king. …Are you suggesting that coconuts migrate? The swallow may fly south with the sun, and the house martin or the plover may seek warmer climes in winter, yet these are not strangers to our land. We found them. Look, my liege!  Now, look here, my good man. Well, I didn't vote for you. Shut up! Well, I didn't vote for you. We found them."},
      {id: 2, title: 'Champion Ice Blocker', body: "Dantooine. They're on Dantooine. I have traced the Rebel spies to her. Now she is my only link to finding their secret base. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing.  I find your lack of faith disturbing. You are a part of the Rebel Alliance and a traitor! Take her away! Your eyes can deceive you. Don't trust them. I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it right now. It's such a long way from here. The Force is strong with this one. I have you now. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander. There'll be no one to stop us this time!"},
    ];
  }
});
