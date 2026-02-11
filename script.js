document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(targetId);
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;

            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - navbarHeight + 1;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // 🔥 FECHA O MENU MOBILE
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-up");
    observer.observe(section);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-custom");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


window.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("hero-particles", {
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
            number: { value: 20 },
            color: { value: "#9A31BB" },
            size: { value: { min: 1, max: 2 } },
            opacity: {
                value: 0.2,
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.1
                }
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out"
                }
            }
        }
    });
});




const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
