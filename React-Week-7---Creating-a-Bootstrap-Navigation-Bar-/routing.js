var routes = {
  "": "signin.html",
  "/": "signin.html",
  "#/signin": "signin.html",
  "#/mission": "mission.html",
  "#/about": "about.html",
};

async function router() {
  var link = window.location.hash;
  var route = routes[link];
  if (route) loadPage(route);
}
router();

async function loadPage(page) {
  const res = await fetch(page);
  const content = await res.text();
  const element = document.getElementById('content');
  element.innerHTML = content;
  window.addEventListener('hashchange', router);
}
