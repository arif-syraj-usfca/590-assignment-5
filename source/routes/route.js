const { home, getTodayDate, getMonthsName, getPeople } = require('../controllers/controller.js');

module.exports = (app) => {
  app.get('/', home);
  app.get('/today', getTodayDate);
  app.get('/months', getMonthsName);
  app.get('/people', getPeople);
};
