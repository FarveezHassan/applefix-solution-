// Enquiry form -> opens WhatsApp with the details prefilled.
// FUTURE INTEGRATION: replace the window.open(...) call below with a fetch() POST
// to your form service (Formspree, Netlify Forms, your own API, etc.).
(function () {
  var WHATSAPP_NUMBER = '94756006554';
  var form = document.getElementById('enq');
  var status = document.getElementById('st');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    if (!name || !phone) {
      status.style.color = '#B3261E';
      status.textContent = 'Please enter your name and phone number.';
      return;
    }
    var text = 'Hello Apple Fix Solutions,%0AName: ' + encodeURIComponent(name) +
      '%0APhone: ' + encodeURIComponent(phone) +
      '%0ACourse: ' + encodeURIComponent(form.course.value) +
      (form.msg.value.trim() ? '%0AMessage: ' + encodeURIComponent(form.msg.value.trim()) : '');
    status.style.color = '#0B7A43';
    status.textContent = 'Opening WhatsApp…';
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + text, '_blank', 'noopener');
  });
})();
