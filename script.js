
// ----------------materialize---------------
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 630,
  duration: 600,
  interval: 4000
});

const collap = document.querySelectorAll('.collapsible');
M.Collapsible.init(collap);

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});

const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed, {

});

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset : 50
});
// -------------Parallax--------------------

$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});


$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll > $('#portfolio').offset().top - 400) {
      $('#portfolio .card').each(function(i) {
          setTimeout(function() {
              $('#portfolio .card').eq(i).addClass('muncul');
          }, 300 * (i+1));
      });

  };

  if (wScroll > $('#skill').offset().top - 600) {
      $('.skillcard').each(function(i) {
          setTimeout(function() {
              $('.skillcard').eq(i).addClass('muncul');
          }, 300 * (i+1));
      });

      $('.determinate').each(function(i) {
          setTimeout(function() {
              $('.determinate').eq(i).addClass('muncul');
          }, 300 * (i+1));
      });

  };


  if (wScroll > $('#sertifikat').offset().top - 400) {
      $('#sertifikat .sertifikat').each(function(i) {
          setTimeout(function() {
              $('#sertifikat .sertifikat').eq(i).addClass('muncul');
          }, 300 * (i+1));
      });

  };
});

$(window).ready(function() {
    $('.wrapper').addClass('wrapAnimate');
    $('.wrapper2').addClass('wrapAnimate');
});
// -------------------Google Sheet------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzc50y39fNw3npPV2PdKOmGcw3c9mdtWLb-VSluSdz1QcuJcIEdyfphteJbvz_sonplrQ/exec'
const form = document.forms['contactme'];
const loading = document.querySelector('.loading');
const alert = document.querySelector('.alert');

 form.addEventListener('submit', e => {
   e.preventDefault()
   //tambahkan loading
   loading.classList.add('muncul');
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
       //hapus loading
       loading.classList.remove('muncul');
       //tambahkan alert
       alert.classList.add('muncul');
       //reset form
       form.reset();
       console.log('Success!', response)
     })
     .catch(error => console.error('Error!', error.message))
 })
