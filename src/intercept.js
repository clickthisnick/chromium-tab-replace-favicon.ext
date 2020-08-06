chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: ["favicon.ico", "favicon"].includes(details.url.split('/').pop().split('?')[0].split('@')[0]) };
  },
  {urls: ["<all_urls>"]},
  ["blocking"]);