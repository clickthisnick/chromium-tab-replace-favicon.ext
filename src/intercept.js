function customBlocks() {
    return new Set([])
}

function isFavicon(url) {
    const faviconOptions = ["favicon.ico", "favicon"]

    if (customBlocks().has(url)) {
        return true
    }

    // Get lastPath with any query parameters stripped
    const lastPath = url.split('/').pop().split('?')[0]

    if (lastPath.endsWith(".png") || lastPath.endsWith(".ico") || lastPath.endsWith(".svg")) {
        return faviconOptions.includes(lastPath.split('-')[0].split('@')[0])
    }

    return false
}

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: isFavicon(details.url) };
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);