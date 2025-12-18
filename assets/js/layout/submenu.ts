export class Submenu {
    private navLinks: NodeListOf<Element>;

    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link[data-bs-toggle="collapse"]');
        this.init();
    }

    private init(): void {
        if (this.navLinks.length > 0) {
            this.setupEventListeners();
        }
    }

    private setupEventListeners(): void {
        this.navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                this.toggleSubmenu(link);
            });
        });
    }

    public toggleSubmenu(link: Element): void {
        link.parentElement?.classList.toggle("open");
    }

    public openAllSubmenus(): void {
        this.navLinks.forEach((link) => {
            link.parentElement?.classList.add("open");
        });
    }

    public closeAllSubmenus(): void {
        this.navLinks.forEach((link) => {
            link.parentElement?.classList.remove("open");
        });
    }
}