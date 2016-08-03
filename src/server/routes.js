var todosRoutes = require('server/todos/routes.js');

module.exports = function routes(app){
   app.use('/todos', todosRoutes);
};
