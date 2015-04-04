/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : new Date(),
    done : true
  }, {
    name : 'Server and Client integration',
    info : new Date(),
    done : false
  }, {
    name : 'Smart Build System',
    info : new Date(),
    done : false
  },  {
    name : 'Modular Structure',
    info : new Date(),
    done : false
  },  {
    name : 'Optimized Build',
    info : new Date(),
    done : false
  },{
    name : 'Deployment Ready',
    info : new Date(),
    done : false
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
