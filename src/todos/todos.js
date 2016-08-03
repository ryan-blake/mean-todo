import _ from 'lodash';

export default function($scope, todoFactory) {
  let params = {
    createHasInput: false
  };
  // $scope.todos = [
  //   {
  //     task: 'do dishes',
  //     isCompleted: false,
  //     isEditing: false
  //   },
  //   {
  //     task: 'do this',
  //     isCompleted: true,
  //     isEditing: false
  //   }
  // ];

  todoFactory.getTasks($scope);


  $scope.onCompletedClick = todo => {
    todo.isCompleted = !todo.isCompleted;
  };

  $scope.onEditClick = todo => {
    todo.isEditing = true;
    todo.updatedTask = todo.task;
  };


  $scope.onCancelClick =  todo => {
    todo.isEditing = false;
  };

// destructering
  const { createTask, updateTask, deleteTask, watchCreateTaskInput } = todoFactory;

  // $scope.createTask = () => {
  //   params.createHasInput = false;
  //   $scope.createTaskInput = '';
  // };
    $scope.createTask = _.partial(createTask, $scope, params );

  // $scope.updateTask = todo => {
  //   todo.task = todo.updatedTask;
  //   todo.isEditing = false;
  // };
    $scope.updateTask = _.partial(updateTask, $scope);


  // $scope.deleteTask = todoToDelete => {
  //   _.remove($scope.todos, todo => todo.task === todoToDelete.task);
  // };
    $scope.deleteTask = _.partial(deleteTask, $scope);


  // $scope.$watch('createTaskInput', val => {
  //   if (!val && params.createHasInput) {
  //     $scope.todos.pop();
  //     params.createHasInput = false;
  //   } else if (val && !params.createHasInput) {
  //     $scope.todos.push({ task: val, isCompleted: false });
  //     params.createHasInput = true;
  //   } else if (val && params.createHasInput) {
  //     $scope.todos[$scope.todos.length -1].task = val;
  //   }
  // });
    $scope.$watch('createTaskInput', _.partial (todoFactory.watchCreateTaskInput, params, $scope));

}
