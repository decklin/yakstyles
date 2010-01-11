var base = 'http://localhost:2562/style/get?url=';
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = base + encodeURIComponent(location.href);
document.documentElement.appendChild(link);
