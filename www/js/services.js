angular.module('starter.services', [])

.factory('DatabaseService', function($cordovaSQLite) {
  var Database = (function() {
 
    // CONSTRUCTOR
 
    function Database () {
      
    }
 
    // ABSTRACT
 
    Database.prototype.execute = function(query, params, cbSuccess, cbError) {
 
    }
 
    Database.prototype.create = function(table_name, fields_description) {
    }
 
    Database.prototype.insert = function(table_name, fields_ar, values_ar) {
    }
 
    Database.prototype.remove = function(table_name, callback) {
    }
 
    // ATTRIBUTES
 
    Database.prototype.dbName          = 'HANGMAN.db'
    Database.prototype.dbVersion       = '0.42'
    Database.prototype.dbComments      = 'Efreitech'
    Database.prototype.dbEstimatedSize = 200000
 
    Database.prototype.db              = undefined
 
    // Go
    return Database;
  })();
 
  return new Database;
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
