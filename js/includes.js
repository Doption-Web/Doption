// NAV LADEN 
fetch('includes/nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
  });

// Hamburger aktivieren (robust)
document.addEventListener('click', function(e) {
  const toggle = e.target.closest('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    nav.classList.toggle('active');
  }
});

// FOOTER LADEN
fetch('includes/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });
