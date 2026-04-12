document.addEventListener("DOMContentLoaded", () => {

  fetch('includes/nav.html', { cache: "no-store" })
    .then(res => res.text())
    .then(html => {

      const placeholder = document.getElementById('nav-placeholder');
      placeholder.innerHTML = html;

      requestAnimationFrame(() => {

        const toggle = placeholder.querySelector('.nav-toggle');
        const nav = placeholder.querySelector('.main-nav');

        if (toggle && nav) {
          toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
          });
        }

      });

    });

  fetch('includes/footer.html', { cache: "no-store" })
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    });

});
