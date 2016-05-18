// https://developer.chrome.com/extensions/bookmarks

chrome.bookmarks.getTree(function(tree) {
  console.log(tree[0].children);
});
