self.oninstall = function(event) {
  // 新しい SW の登録中に呼ばれる。
  // リソースをキャッシュしたりする。
};

self.onactivate = function(event) {
  // SW がアクティブになる直前に呼ば
  // れる。古いリソースを消したりする。

  self.onfetch = function(fetchEvent) {
    var requestURL = new URL(fetchEvent.request.url);
    if (requestURL.pathname == ‘/’) {
      // 存在しないページ “/notfound.html” へのアクセスなら
      // 独自のレスポンスを生成して返す
      fetchEvent.respondWith(new Response(‘Goodbye 404!’));
      return;
    }
    // 何もしないとネットワークリクエストにフォールバック
  };
};
