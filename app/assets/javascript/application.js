//= require jquery3
//= require popper
//= require bootstrap-sprockets

document.addEventListener('turbolinks:load', function() {
  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
});