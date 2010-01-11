var host = location.hostname.replace(/^www\./, '');
var path = location.pathname.replace(/\/$/, '');
var styles = ['__all__', host].concat(path ? [host+path] : []);

styles.forEach(function(s) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.extension.getURL('styles/'+s+'.css');
    document.documentElement.appendChild(link);
});
