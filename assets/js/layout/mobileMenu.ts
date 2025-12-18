export class MobileMenu {
    private mobileMenuBtn: HTMLElement | null;
    private leftSidebar: HTMLElement | null;

    constructor() {
        this.mobileMenuBtn = document.getElementById("mobile-menu-btn");
        this.leftSidebar = document.getElementById("left-sidebar");
        this.init();
    }

    private init(): void {
        if (this.mobileMenuBtn && this.leftSidebar) {
            this.mobileMenuBtn.addEventListener("click", () => {
                this.toggleMenu();
            });
        } else {
            console.error("Mobile menu elements not found");
        }
    }

    public toggleMenu(): void {
        if (this.leftSidebar) {
            this.leftSidebar.classList.toggle("open");
            document.body.classList.toggle("menu-open");
        }
    }

    public openMenu(): void {
        if (this.leftSidebar) {
            this.leftSidebar.classList.add("open");
            document.body.classList.add("menu-open");
        }
    }

    public closeMenu(): void {
        if (this.leftSidebar) {
            this.leftSidebar.classList.remove("open");
            document.body.classList.remove("menu-open");
        }
    }

    public isOpen(): boolean {
        return this.leftSidebar?.classList.contains("open") || false;
    }
}