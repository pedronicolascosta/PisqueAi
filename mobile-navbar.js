class MobileNavbar {
  constructor(mobileMenu) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.sidebar = document.querySelector('.sidebar');
    this.activeClass = "active";
    this.navLinks = document.querySelectorAll('.sidebar li');

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    const nav = document.querySelector('nav');
    
    this.mobileMenu.classList.toggle(this.activeClass);
    this.sidebar.style.display = this.mobileMenu.classList.contains(this.activeClass) ? 'flex' : 'none'; // Toggle display based on activeClass
    this.animateLinks();
    
    // Verifica se a barra lateral está visível
    if (this.sidebar.style.display === 'flex') {
      nav.classList.add('sidebar-open'); // Desativa o backdrop-filter
    } else {
      nav.classList.remove('sidebar-open'); // Ativa o backdrop-filter
    }
  }

  handleOutsideClick(event) {
    if (!this.mobileMenu.contains(event.target) && !this.sidebar.contains(event.target) && this.mobileMenu.classList.contains(this.activeClass)) {
      this.mobileMenu.classList.remove(this.activeClass);
      this.sidebar.style.display = 'none';
      this.animateLinks();
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    document.addEventListener("click", this.handleOutsideClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
);
mobileNavbar.init();

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
