const proxy = require("window-post-message-proxy")

window.createPostMessageProxy = function() {
  return new proxy.WindowPostMessageProxy();
}
