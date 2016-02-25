// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Look up on Tatoeba";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var searchText = info.selectionText;
  var searchUrl = "http://tatoeba.org/eng/sentences/search?query=" + encodeURIComponent(searchText) + "&from=und&to=und";  
  window.open(searchUrl, '_blank');
};
