const SpacexController = require('../controllers/SpacexController');
module.exports = (app) => {
   app.get('/next', SpacexController.next);
   app.get('/latest', SpacexController.latest);
   app.get('/upcoming', SpacexController.upcoming);
   app.get('/past', SpacexController.past);
   app.get('/rocket/:id', SpacexController.rocket);
   app.get('/launchpad/:id', SpacexController.launchpad);
}