angular.module('starter.controllers', [])

.controller('pageGameCTRL', function($scope, $ionicPopup, $timeout, $ionicModal) {

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

$scope.openModal();


$scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'YO !',
     template: 'Coming soon !'
   });
   alertPopup.then(function(res) {
     console.log('Pendu Gamer');
   });
 };

})

.controller('ChatsCtrl', function($scope, Chats) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PagePlayCTRL', function($scope, $ionicModal, $ionicPopup, $timeout) {
 
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.shown', function() {
    $ionicPopup.prompt({
      title: 'Jeux du Pendu',
      template: 'Choose a word between 3 and 10',
      inputType: 'text',
      inputPlaceholder: 'Your Word',
      buttons: [
      { text: 'Random', type: 'button-positive' }, {text: 'ok', onTap: function(e){}}
      ]
    }).then(function(res){
      console.log('Le mot est');
    });
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});