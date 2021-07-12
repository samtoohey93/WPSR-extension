function flushCache() { 
    caches.open('v1').then(function(cache) {
        cache.delete('/images/image.png').then(function(response) {
          someUIUpdateFunction();
        });
      })
    alert("Cache has been Flushed! CTRL + R or CMD + R")
}

function privacy() {
        alert("Privacy settings have been emptied & reset")
    }

  
  var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
  chrome.browsingData.remove({
    "since": oneWeekAgo
  }, {
    "appcache": true,
    "cache": true,
    "cacheStorage": true,
    "cookies": true,
    "downloads": true,
    "fileSystems": true,
    "formData": true,
    "history": true,
    "indexedDB": true,
    "localStorage": true,
    "passwords": true,
    "serviceWorkers": true,
    "webSQL": true
  }, callback);
  