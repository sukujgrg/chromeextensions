function removeSpecficCookies(domain_name) {
  chrome.cookies.getAll({domain: domain_name}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
      console.log(cookies[i]);
      chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
    }
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  var domain_names = ["theaustralian.com.au", "news.com.au", "www.theaustralian.com.au", "myaccount.news.com.au"];
  for (i = 0; i < domain_names.length; i++){
    removeSpecficCookies(domain_names[i]);
  }
});
