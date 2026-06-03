// Product Page JS
document.addEventListener('DOMContentLoaded', () => {
  // Category filter
  const catLinks = document.querySelectorAll('.category-list li');
  catLinks.forEach(li => {
    li.addEventListener('click', () => {
      catLinks.forEach(l => l.classList.remove('active'));
      li.classList.add('active');
    });
  });

  // Pagination
  const pageBtns = document.querySelectorAll('.page-btn');
  pageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pageBtns.forEach(b => b.classList.remove('active'));
      if (!btn.innerHTML.includes('›')) btn.classList.add('active');
    });
  });
});
