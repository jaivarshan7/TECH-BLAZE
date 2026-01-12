document.addEventListener("DOMContentLoaded", function () {
    console.log("Footer script loaded");
    loadFooter();
});

// Make globally available for debugging
window.loadFooter = function () {
    console.log("Executing loadFooter...");
    try {
        // 1. Inject CSS
        // Check if link already exists
        if (!document.querySelector('link[href*="Shared/footer.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';

            // Attempt to find path relative to this script
            const scripts = document.getElementsByTagName('script');
            let cssPath = 'Shared/footer.css'; // Default relative path

            for (let i = 0; i < scripts.length; i++) {
                const src = scripts[i].getAttribute('src');
                if (src && src.includes('footer.js')) {
                    // Replace .js with .css
                    // If src is "/Shared/footer.js", result is "/Shared/footer.css"
                    // If src is "../Shared/footer.js", result is "../Shared/footer.css"
                    cssPath = src.replace('footer.js', 'footer.css');
                    break;
                }
            }

            link.href = cssPath;
            document.head.appendChild(link);
            console.log("Footer CSS injected:", cssPath);
        }

        // 2. Find Container
        const footerContainer = document.getElementById("footer-container");
        if (!footerContainer) {
            console.error("Footer container not found!");
            return;
        }

        // 3. Determine Base Path for Links
        // We need to calculate how to get back to the root based on current depth
        // A simple heuristic: check how many levels deep we are relative to known structure
        // Or assume the script structure mirrors the site structure.

        // Let's use a simpler approach relying on the fact that Shared/ is at root.
        // We can define getPathToRoot based on the script src used to load this file.
        // If script src was "../Shared/footer.js", root is "../".
        // If script src was "Shared/footer.js", root is "./".

        let rootPath = "./";
        const scripts = document.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const src = scripts[i].getAttribute('src');
            if (src && src.includes('Shared/footer.js')) {
                // e.g. "Shared/footer.js" -> root is "./"
                // e.g. "../Shared/footer.js" -> root is "../"
                // e.g. "../../Shared/footer.js" -> root is "../../"
                const parts = src.split('Shared/footer.js');
                if (parts[0]) {
                    rootPath = parts[0];
                }
                break;
            }
        }

        // If rootPath is empty (implicit ./), make it explicit
        if (rootPath === "") rootPath = "./";

        console.log("Calculated root path:", rootPath);

        // 4. Build HTML
        const html = `
        <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-brand">
                    <h2 class="brand-name">TECH<span class="highlight">BLAZE</span></h2>
                    <p class="tagline">Igniting Innovation, <br>Inspiring Future.</p>
                    <div class="social-links">
                        <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="social-icon"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                <div class="footer-links-group">
                    <div class="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="${rootPath}index.html">Home</a></li>
                            <li><a href="${rootPath}About/About-event/event.html">About Event</a></li>
                            <li><a href="${rootPath}About/About-univ/univ.html">About University</a></li>
                            <li><a href="${rootPath}Gallery/gallery.html">Gallery</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Events</h3>
                        <ul>
                            <li><a href="${rootPath}Event/event.html">All Events</a></li>
                        </ul>
                    </div>
                    <div class="footer-column contact-column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i class="fa-solid fa-location-dot"></i> Rajiv Gandhi Salai (OMR), Padur, Chennai - 603 103</li>
                            <li><a href="mailto:techsympca@hindustanuniv.ac.in" target="_blank"><i class="fa-solid fa-envelope"></i> TechSympca@hindustanuniv.ac.in</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">
                    <p>&copy; 2026 TechBlaze. All Rights Reserved.</p>
                </div>
                <div class="designer">
                    <p>Designed by <span class="highlight">Team TechBlaze</span></p>
                </div>
            </div>
        </footer>
        `;

        footerContainer.innerHTML = html;
        console.log("Footer HTML injected successfully.");

    } catch (err) {
        console.error("Critical error in footer.js:", err);
    }
};
