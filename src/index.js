import "./styles.css";

const studentResourcesButton = document.getElementById('student-resources-button');
const studentResourcesNav = document.getElementById('student-resources-nav');
studentResourcesButton.addEventListener('click', () => {
  console.log('button clicked');
  if (studentResourcesNav.classList.contains('hidden')) {
    studentResourcesNav.classList.remove('hidden');
    studentResourcesButton.innerHTML = `
      Student Resources <span class="nav-open">^</span>`;
  } else {
    studentResourcesNav.classList.add('hidden');
    studentResourcesButton.innerHTML = `Student Resources <span class="nav-closed">⌄</span> `;
  }

});

const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nvb');
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.page;

    // if button has no page do nothing
    if (!target) return;

    // hide all pages
    pages.forEach(p => p.classList.add('hidden'));

    // show the slected one
    document.getElementById(target).classList.remove('hidden');

    navButtons.forEach(b => b.classList.remove('selected'));
    button.classList.add('selected');
  });
});