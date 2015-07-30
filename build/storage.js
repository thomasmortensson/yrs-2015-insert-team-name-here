function store(obj) {
  chrome.storage.local.set(obj)
}

function get(key, callback) {
  chrome.storage.local.get(key, callback)
}

