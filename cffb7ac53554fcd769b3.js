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

const researchLabButtons = document.querySelectorAll('.lab-button');
const researchLabSections = document.querySelectorAll('.labsection');
researchLabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.labsection;
    if (!target) return;

    const section = document.getElementById(target);

    const wasSelected = button.classList.contains('lab-button-selected');

    researchLabButtons.forEach(b => {
      b.classList.remove('lab-button-selected');
      b.classList.add('research-lab-button');
    });

    researchLabSections.forEach(s => {
      s.classList.add('max-h-0');  
      s.classList.remove('pt-3');
      s.classList.remove('pb-5');
      s.classList.remove('max-h-[500px]') 
    });

    if (wasSelected) {
      section.classList.add('max-h-0');  
      section.classList.remove('pt-3');
      section.classList.remove('pb-5');
      section.classList.remove('max-h-[500px]');    
      button.classList.add('research-lab-button'); 
      return;
    }

    section.classList.remove('max-h-0');
    section.classList.add('pt-3');
    section.classList.add('pb-5');
    section.classList.add('max-h-[500px]')
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