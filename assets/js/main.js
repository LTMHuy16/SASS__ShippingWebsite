/* ================= SHOW MENU ==================== */
/* ================================================ */
const showMenu =  (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if(toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

/* ======== REMOVE MENU WHEN CLICK LINK=========== */
/* ================================================ */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  //when click each nav__link, remove the menu
  navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));


/* ========== SCROLL SECTION ACTIVE LINK =========== */
/* ================================================ */
const sections = document.querySelectorAll("section[id]");

function scrollActiveSection () {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav .nav__menu a[href*=' + sectionId + ']').classList.add("active");
    } else {
      document.querySelector('.nav .nav__menu a[href*=' + sectionId + ']').classList.remove("active");
    }
  })
}
window.addEventListener("scroll", scrollActiveSection);

/* ======= CHANGE BACKGROUND COLOR HEADER ========== */
/* ================================================ */
function scrollHeader() {
  const header = document.getElementById("header");
  
  if(this.scrollY >= 80)
    header.classList.add("scroll-header");
  else
    header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);


/* =============== SHOW SCROLL UP ================== */
/* ================================================ */
function scrollUp() {
  const scrollTUp = document.getElementById('scroll-up');

  if (this.scrollY > 500)
    scrollTUp.classList.add('show-scroll');
  else
    scrollTUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* ============== DARK LIGHT THEME ================= */
/* ================================================ */
const changeTheme = document.querySelector('.change-theme');
const darkTheme = 'dark-theme';
let iconTheme;

// get previous choose in localStorage and set theme for body
const selectedTheme = localStorage.getItem('Delivery');
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark-theme' ? 'add' : 'remove'](darkTheme);
}
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark-theme' : 'light-theme'


changeTheme.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);

  // set icon following darkTheme variable
  if (darkTheme == 'dark-theme') iconTheme = 'bx-toggle-right';
  else iconTheme = 'bx-toggle-left';
  
  changeTheme.classList.toggle(iconTheme);

  localStorage.setItem('Delivery', getCurrentTheme())
})