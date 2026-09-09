(function () {
  var toggle = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-routes');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(open));
  });
})();
