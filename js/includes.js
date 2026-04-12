// NAV LADEN 
fetch('includes/nav.html')
  .then(res => res.text())
  .then(html => {
    const placeholder = document.getElementById('nav-placeholder');
    placeholder.innerHTML = html;

    const toggle = placeholder.querySelector('.nav-toggle');
    const nav = placeholder.querySelector('.main-nav');

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }
  });

// FOOTER LADEN
fetch('includes/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });
