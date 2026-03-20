const search = new URLSearchParams(window.location.search).get('search');
const path = `assets/data/${search}.js`;
const script = document.createElement('script');

script.id = 'load';
script.src = path;
script.onload = onload || function () {};
document.body.appendChild(script);
