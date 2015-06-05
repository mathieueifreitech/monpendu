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
   
   $scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });
};

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
      { text: 'Random' }, {text: 'ok'}
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