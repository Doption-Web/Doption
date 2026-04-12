fetch('includes/nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;

    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('active');
      });
    }
  });

fetch('includes/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });
