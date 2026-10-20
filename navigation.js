// Mobile menu + active nav link highlight
(function () {
  var burger = document.querySelector('.burger');
  var drawer = document.getElementById('drawer');

  burger.addEventListener('click', function () {
    var open = drawer.classList.toggle('on');
    burger.setAttribute('aria-expanded', open);
  });
  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      drawer.classList.remove('on');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  var links = document.querySelectorAll('.nav ul a');
  var ids = [].map.call(links, function (a) { return a.getAttribute('href').slice(1); });
  window.addEventListener('scroll', function () {
    var y = window.scrollY + 140, current = ids[0];
    ids.forEach(function (id) {
      var s = document.getElementById(id);
      if (s && s.offsetTop <= y) current = id;
    });
    links.forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
})();
