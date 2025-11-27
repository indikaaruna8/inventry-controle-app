import "./styles/app.scss"; // Bootstrap SCSS imported
import "bootstrap"; // Bootstrap JS

document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    document
        .getElementById("mobile-menu-btn")
        .addEventListener("click", function () {
            document.getElementById("left-sidebar").classList.toggle("open");
            document.body.classList.toggle("menu-open");
        });

    // Notification panel toggle
    document
        .getElementById("notification-icon")
        .addEventListener("click", function (e) {
            e.stopPropagation();
            document
                .getElementById("notification-panel")
                .classList.toggle("show");
        });

    // Close notification panel when clicking outside
    document.addEventListener("click", function () {
        document.getElementById("notification-panel").classList.remove("show");
    });

    // Prevent notification panel from closing when clicking inside
    document
        .getElementById("notification-panel")
        .addEventListener("click", function (e) {
            e.stopPropagation();
        });

    // Right sidebar toggle on hover
    const mainContent = document.getElementById("main-content");
    const rightSidebar = document.getElementById("right-sidebar");

    mainContent.addEventListener("mouseenter", function () {
        rightSidebar.classList.add("open");
    });

    mainContent.addEventListener("mouseleave", function () {
        rightSidebar.classList.remove("open");
    });

    // Handle submenu toggling
    const navLinks = document.querySelectorAll(
        '.nav-link[data-bs-toggle="collapse"]'
    );
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            this.parentElement.classList.toggle("open");
        });
    });
});
