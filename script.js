let currentPage = 0;
const pages = document.querySelectorAll('.page');
const nextButtons = document.querySelectorAll('.next-btn');

nextButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Hide current page
    pages[currentPage].classList.add('hidden');
    
    // Move to next page
    currentPage++;

    // If we reach the end, loop back or stop
    if (currentPage < pages.length) {
      pages[currentPage].classList.remove('hidden');
    }
  });
});
