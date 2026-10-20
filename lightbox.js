// Gallery lightbox
(function () {
  var items = [].slice.call(document.querySelectorAll('#masonry button'));
  var lb = document.getElementById('lb');
  var img = document.getElementById('lbimg');
  var cap = document.getElementById('lbcap');
  var idx = 0, last = null;

  function show(i) {
    idx = (i + items.length) % items.length;
    var im = items[idx].querySelector('img');
    img.src = im.src; img.alt = im.alt;
    cap.textContent = items[idx].dataset.cap || '';
  }
  function open(i) {
    last = document.activeElement;
    show(i);
    lb.classList.add('on');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lb-x').focus();
  }
  function close() {
    lb.classList.remove('on');
    document.body.style.overflow = '';
    if (last) last.focus();
  }

  items.forEach(function (el, i) { el.addEventListener('click', function () { open(i); }); });
  lb.querySelector('.lb-x').onclick = close;
  lb.querySelector('.lb-n').onclick = function () { show(idx + 1); };
  lb.querySelector('.lb-p').onclick = function () { show(idx - 1); };
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('on')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
})();
