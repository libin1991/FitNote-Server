const controller = require('./controller');
const authorization = require('../../middleware/Authorization');

const router = [
  { method: 'POST', route: '/t_record', handlers: [authorization.check, controller.addRecord] },
  { method: 'PUT', route: '/t_record/:id', handlers: [authorization.check, controller.updateRecord] },
  { method: 'DELETE', route: '/t_record/:id', handlers: [authorization.check, controller.removeRecord] },
  { method: 'GET', route: '/t_record', handlers: [authorization.check, controller.getRecordList] },
  { method: 'GET', route: '/t_record/:id', handlers: [authorization.check, controller.getTraingingRecord] }
];

module.exports = router;
