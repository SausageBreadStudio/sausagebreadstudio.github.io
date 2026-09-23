(function () {
  var dlg = document.getElementById('lightbox');
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  if (!dlg || !links.length || !dlg.showModal) return;
  var img = dlg.querySelector('img');
  var i = 0;

  function show(n) {
    i = (n + links.length) % links.length;
    img.src = links[i].href;
    img.alt = links[i].dataset.alt || '';
  }

  links.forEach(function (a, n) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      show(n);
      dlg.showModal();
    });
  });

  dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.lb-prev').addEventListener('click', function () { show(i - 1); });
  dlg.querySelector('.lb-next').addEventListener('click', function () { show(i + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target === img) dlg.close(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();
