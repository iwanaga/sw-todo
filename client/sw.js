self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  //fetch('http://localhost:9000/api/things/warning').then(function (data) {
   // var thing = JSON.parse(data);
    var title = '間もなく閉め切り';
    var body = 'todo: ここにTodoが入れる';
    //var body = thing.name;
    var icon = '/images/icon-192x192.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
      self.registration.showNotification(title, {
        body: body,
        icon: icon,
        tag: tag
      })
    );
  //});
});
