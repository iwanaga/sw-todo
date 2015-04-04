(function() {
  'use strict';

  navigator.serviceWorker
    .register(‘/sw-cache.js’, {scope: ’/’})
    .then(function(registration) {
        // Success!
      })
    .catch(function(error) {
        // Error...
      });
});
