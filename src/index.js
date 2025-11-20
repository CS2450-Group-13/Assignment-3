import "./styles.css";

const studentResourcesButton = document.getElementById('student-resources-button');
const studentResourcesNav = document.getElementById('student-resources-nav');

const toggleStudentResourcesTab = () => {
  if (studentResourcesNav.classList.contains('max-h-0')) {
    studentResourcesNav.classList.remove('max-h-0');
    studentResourcesNav.classList.add('max-h-[500px]');
    studentResourcesButton.innerHTML = `
    Student Resources <span class="nav-open">^</span>`;
  } else {
    studentResourcesNav.classList.add('max-h-0');
    studentResourcesNav.classList.remove('max-h-[500px]');
    studentResourcesButton.innerHTML = `Student Resources <span class="nav-closed">⌄</span> `;
  }
}

studentResourcesButton.addEventListener('click', toggleStudentResourcesTab);

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

const bottomBubbles = document.querySelectorAll('.bottom-bubbles');
bottomBubbles.forEach(button => {
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

const greenStudentLabsButton = document.getElementById('student-labs-bottom-button');
const studentLabsButton = document.getElementById('student-labs-button');
greenStudentLabsButton.addEventListener('click', () => {
  const target = greenStudentLabsButton.dataset.page;

  pages.forEach(p => p.classList.add('hidden'));

  navButtons.forEach(b => b.classList.remove('selected'));
  studentLabsButton.classList.add('selected');

  toggleStudentResourcesTab();
  document.getElementById(target).classList.remove('hidden');
});

const greenStudentResourcesButton = document.getElementById('student-resources-bottom-button');
greenStudentResourcesButton.addEventListener('click', () => {
  toggleStudentResourcesTab();
});

const researchLabButtons = document.querySelectorAll('.research-lab-button');
const researchLabSections = document.querySelectorAll('.labsection');
researchLabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.labsection;

    if (!target) return;

    researchLabSections.forEach(s => s.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');

    researchLabButtons.forEach(b => {
      b.classList.remove('lab-button-selected');
      b.classList.add('research-lab-button');
    });

    button.classList.add('lab-button-selected');
    button.classList.remove('research-lab-button');
  });
});

document.querySelectorAll('.back-to-top-button').forEach(b => {
  b.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});