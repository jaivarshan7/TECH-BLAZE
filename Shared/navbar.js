document.addEventListener("DOMContentLoaded", function () {
    loadNavbar();

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});

function loadNavbar() {
    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) return;

    // Determine base path based on current location to ensure links work from subfolders
    const path = window.location.pathname;
    let basePath = "/";
    // Checks if we are in a subdirectory (e.g., /Home/, /About/)
    // This is a simple check; for deeper nesting, a more robust solution might be needed,
    // but for this project structure, it should suffice. 
    // Actually, using absolute paths starting with / is the safest bet for this server structure.
    // The existing links seem to use /Home/Home.html etc. which is good.

    const html = `
    <div class="nav-bar">
        <div class="nav-top">
            <div class="logo">
                <img src="/img/all/tb-logo.png" alt="Logo">
            </div>
            <div class="hits-logo">
                <img src="/img/all/hits-white.png" alt="Logo">
            </div>
            <div class="hu40-logo">
                <img src="/img/all/hu40.png" alt="Logo">
            </div>
        </div>
        <div class="menus">
            <li><a href="/Home/index.html" class="nav-link" data-page="home">Home</a></li>
            
            <li class="dropdown-trigger">
                <a href="#" class="nav-link" data-page="about">About <i class="fa-solid fa-chevron-down" style="font-size: 0.8em;"></i></a>
                <div class="dropdown-menu">
                    <a href="/About/About-univ/univ.html">About University</a>
                    <a href="/About/About-department/deparment.html">About Department</a>
                    <a href="/About/About-event/event.html">About Tech Blaze</a>
                    <a href="/About/About-team/team.html">Our Team</a>
                </div>
            </li>

            <li><a href="/Event/event.html" class="nav-link" data-page="events">Events</a></li>
            <li><a href="#" class="nav-link" data-page="sponsors">Sponsors</a></li>
            <li><a href="/Gallery/gallery.html" class="nav-link" data-page="gallery">Gallery</a></li>
        </div>
        
        <div class="contact-detail">
            <div class="Contact">
                <li><a href="https://techblaze26.netlify.app/" target="_blank" class="login" id="register-btn">REGISTER</a></li>
            </div>
            <div class="Contact">
                <li><a href="https://chat.whatsapp.com/CcAG6FlCDkIKmUUW7NphKx" target="_blank" class="whatsapp-link" id="contact"><i class="fa-brands fa-whatsapp"></i></a></li>
            </div>
            <div class="hambuger">
                <button id="hambugericon"><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="hambuger-menu" id="hambuger-menu">
            <div class="mobile-header">
                <h2>MENU</h2>
                <button id="hambugercicon"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>

            <ul>
                <li><a href="/Home/index.html">Home</a></li>
                <li class="mobile-dropdown">
                    <a href="#" onclick="toggleMobileAbout(event)">About <i class="fa-solid fa-chevron-down"></i></a>
                    <ul id="mobile-about-submenu">
                        <li><a href="/About/About-univ/univ.html">About University</a></li>
                        <li><a href="/About/About-department/deparment.html">About Department</a></li>
                        <li><a href="/About/About-event/event.html">About Tech Blaze</a></li>
                        <li><a href="/About/About-team/team.html">Our Team</a></li>
                    </ul>

                </li>
                <li><a href="/Event/event.html">Events</a></li>
                <li><a href="#">Sponsors</a></li>
                <li><a href="/Gallery/gallery.html">Gallery</a></li>
                <li><a href="https://techblaze26.netlify.app/" target="_blank">Register</a></li>
                <li style="display: flex; justify-content: center; margin-top: 20px;"><a href="https://chat.whatsapp.com/CcAG6FlCDkIKmUUW7NphKx" class="mobile-whatsapp"><i class="fa-brands fa-whatsapp" style="font-size: 2.5rem; color: #25D366;"></i></a></li>
            </ul>
        </div>
    `;

    navbarContainer.innerHTML = html;

    // Highlight current page
    highlightCurrentPage();

    // Event Listeners for Mobile Menu
    const hamburgerBtn = document.getElementById("hambugericon");
    const closeBtn = document.getElementById("hambugercicon");
    const mobileMenu = document.getElementById("hambuger-menu");

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", () => {
            mobileMenu.classList.add("active");
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    }

    // Logic for button highlighting or other dynamic features can remain here

}

function highlightCurrentPage() {
    const currentPath = window.location.pathname.toLowerCase();
    const links = document.querySelectorAll(".nav-bar .menus a");

    links.forEach(link => {
        const href = link.getAttribute("href").toLowerCase();
        // Check if current path includes the href (e.g. /Home/Home.html includes /Home/Home.html)
        // Special case for root /
        if (currentPath === "/" || currentPath.endsWith("index.html")) {
            if (href === "/index.html" || href === "/") {
                link.classList.add("Current-page");
            }
        } else if (href !== "#" && href !== "/" && currentPath.includes(href)) {
            link.classList.add("Current-page");
        } else if (href !== "#" && href !== "/" && href.includes(currentPath)) {
            // Reverse check if needed
            link.classList.add("Current-page");
        }
    });
}

// Global scope function for the mobile submenu toggle in HTML onclick
window.toggleMobileAbout = function (event) {
    if (event) event.preventDefault();
    const submenu = document.getElementById("mobile-about-submenu");
    const icon = event.target.querySelector("i") || event.target.parentElement.querySelector("i");

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        if (icon) icon.style.transform = "rotate(0deg)";
    } else {
        submenu.style.display = "block";
        if (icon) icon.style.transform = "rotate(180deg)";
    }
};

