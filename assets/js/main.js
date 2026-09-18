const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('open');
  });
}

const filterButtons = document.querySelectorAll('[data-filter]');
const publications = document.querySelectorAll('[data-type]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    publications.forEach((publication) => {
      publication.hidden = filter !== 'all' && publication.dataset.type !== filter;
    });
    document.querySelectorAll('.year-group').forEach((group) => {
      group.hidden = !group.querySelector('[data-type]:not([hidden])');
    });
  });
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
