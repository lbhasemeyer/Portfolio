import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
  {id: 1,
   title: 'Traveler and Blogger',
   employer: 'World Trip',
   body: ["Fostered cross-cultural relationships and communicated with diverse groups of people"]},
  {id: 2,
   title: 'Account Manager, Experience Consultant',
   employer: 'Cloud 9 Living, Boulder, CO',
   body: ["Solidified and grew partnerships with JPMorgan Chase and Intercontinental Hotels Group.",
   "Created experience listings, merchandised, and used basic SEO for www.cloud9living.com.",
   "First point of contact for suppliers - fostered positive supplier relationships."]},
  {id: 3,
   title: 'Intern',
   employer: 'Habitat for Humanity, Santa Barbara, CA',
   body: ["Managed and maintained online sales websites for ReStore merchandise.",
   "Planned and managed events, recruited volunteers, developed publicity"]}
    ];
  }
});
