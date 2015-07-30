function store(obj) {
  chrome.storage.local.set(obj)
}

function get(key, callback) {
  chrome.storage.local.get(key, callback)
}

function clean() {
	chrome.storage.local.remove('SpoilerAlert', function() {
		console.log("Data cleaned");
	});
}