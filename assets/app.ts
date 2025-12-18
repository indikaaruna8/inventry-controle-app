import "./styles/app.scss"; // Bootstrap SCSS imported
import "bootstrap"; // Bootstrap JS
import LayoutManagerImpl from "./js/layout";

document.addEventListener("DOMContentLoaded", function () { 
    try {
        // Initialize layout manager
        const layoutManager = new LayoutManagerImpl();
        layoutManager.init();
        
        console.log("Application initialized successfully");
    } catch (error) {
        console.error("Failed to initialize application:", error);
    }
});