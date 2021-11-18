const SpacexController = require('../controllers/SpacexController');
module.exports = (app) => {
   app.get('/api/next', SpacexController.next);
   app.get('/api/latest', SpacexController.latest);
   app.get('/api/upcoming', SpacexController.upcoming);
   app.get('/api/past', SpacexController.past);
   app.get('/api/rocket/:id', SpacexController.rocket);
   app.get('/api/launchpad/:id', SpacexController.launchpad);
}
